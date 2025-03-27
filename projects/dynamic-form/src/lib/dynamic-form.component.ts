import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { FormService } from './form-service.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, public formService: FormService) { }

  ngOnInit() {
    const formStructure = this.formService.getFormStructure();
    let formGroup: Record<string, any> = {};

    formStructure.forEach((control:any) => {
      if (control.type === 'checkbox-group') {
        // Handle checkbox groups differently
        const checkboxControls: Record<string, FormControl> = {};
        control.options.forEach((option: any) => {
          checkboxControls[option.value] = new FormControl(option.checked || false);
        });
        formGroup[control.name] = this.formBuilder.group(checkboxControls);
      } else {
        // Handle all other controls
        let controlValidators: any[] = [];

        if (control.validations) {
          control.validations.forEach((validation: any) => {
            switch (validation.validator) {
              case 'required':
                controlValidators.push(Validators.required);
                break;
              case 'email':
                controlValidators.push(Validators.email);
                break;
              case 'minLength':
                controlValidators.push(Validators.minLength(validation.value));
                break;
              case 'maxLength':
                controlValidators.push(Validators.maxLength(validation.value));
                break;
              case 'min':
                controlValidators.push(Validators.min(validation.value));
                break;
              case 'max':
                controlValidators.push(Validators.max(validation.value));
                break;
              case 'pattern':
                controlValidators.push(Validators.pattern(validation.value));
                break;
              // Add more validators as needed
            }
          });
        }

        formGroup[control.name] = [control.value || '', controlValidators];
      }
    });

    this.dynamicForm = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted', this.dynamicForm.value);
      // Process form data here
    } else {
      console.log('Form is invalid');
      // Mark all fields as touched to show validation messages
      Object.values(this.dynamicForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(subControl => {
            subControl.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl || !control.validations) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        return validation.message;
      }

      // Handle minlength/maxlength errors with their proper error keys
      if (validation.validator === 'minLength' && formControl.hasError('minlength')) {
        return validation.message;
      }
      if (validation.validator === 'maxLength' && formControl.hasError('maxlength')) {
        return validation.message;
      }
      if (validation.validator === 'min' && formControl.hasError('min')) {
        return validation.message;
      }
      if (validation.validator === 'max' && formControl.hasError('max')) {
        return validation.message;
      }
      if (validation.validator === 'pattern' && formControl.hasError('pattern')) {
        return validation.message;
      }
    }

    return '';
  }

  isCheckboxGroup(control: any): boolean {
    return control.type === 'checkbox-group';
  }
}