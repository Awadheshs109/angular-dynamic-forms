import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class DynamicFormService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FormService {
    constructor() {
        this.formStructure = [
            {
                "type": "text",
                "label": "Full Name",
                "name": "fullName",
                "value": "",
                "validations": [
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Name is required"
                    },
                    {
                        "name": "minlength",
                        "validator": "minLength",
                        "value": 3,
                        "message": "Name must be at least 3 characters"
                    },
                    {
                        "name": "maxlength",
                        "validator": "maxLength",
                        "value": 30,
                        "message": "Name cannot exceed 30 characters"
                    }
                ]
            },
            {
                "type": "email",
                "label": "Email Address",
                "name": "email",
                "value": "",
                "validations": [
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Email is required"
                    },
                    {
                        "name": "email",
                        "validator": "email",
                        "message": "Invalid email format"
                    }
                ]
            },
            {
                "type": "number",
                "label": "Age",
                "name": "age",
                "value": "",
                "validations": [
                    {
                        "name": "min",
                        "validator": "min",
                        "value": 18,
                        "message": "Age must be at least 18"
                    },
                    {
                        "name": "max",
                        "validator": "max",
                        "value": 99,
                        "message": "Age must be less than 100"
                    },
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Age is required"
                    },
                ]
            },
            {
                "type": "password",
                "label": "Password",
                "name": "password",
                "value": "",
                "validations": [
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Password is required"
                    },
                    {
                        "name": "pattern",
                        "validator": "pattern",
                        "value": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$",
                        "message": "Password must contain at least 8 characters, one uppercase, one lowercase, and one number"
                    }
                ]
            },
            {
                "type": "select",
                "label": "Country",
                "name": "country",
                "value": "",
                "options": [
                    { "label": "Select Country", "value": "" },
                    { "label": "United States", "value": "US" },
                    { "label": "Canada", "value": "CA" },
                    { "label": "United Kingdom", "value": "UK" },
                    { "label": "Australia", "value": "AU" }
                ],
                "validations": [
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Country is required"
                    }
                ]
            },
            {
                "type": "radio",
                "label": "Gender",
                "name": "gender",
                "value": "",
                "options": [
                    { "label": "Male", "value": "male" },
                    { "label": "Female", "value": "female" },
                    { "label": "Other", "value": "other" }
                ],
                "validations": [
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Gender is required"
                    }
                ]
            },
            {
                "type": "checkbox",
                "label": "Subscribe to Newsletter",
                "name": "newsletter",
                "value": false
            },
            {
                "type": "checkbox-group",
                "label": "Interests",
                "name": "interests",
                "options": [
                    { "label": "Technology", "value": "tech", "checked": false },
                    { "label": "Sports", "value": "sports", "checked": false },
                    { "label": "Music", "value": "music", "checked": false },
                    { "label": "Travel", "value": "travel", "checked": false }
                ]
            },
            {
                "type": "textarea",
                "label": "Bio",
                "name": "bio",
                "value": "",
                "validations": [
                    {
                        "name": "maxlength",
                        "validator": "maxLength",
                        "value": 500,
                        "message": "Bio cannot exceed 500 characters"
                    }
                ]
            },
            {
                "type": "date",
                "label": "Birth Date",
                "name": "birthDate",
                "value": "",
                "validations": [
                    {
                        "name": "required",
                        "validator": "required",
                        "message": "Birth date is required"
                    }
                ]
            }
        ];
    }
    getFormStructure() {
        return this.formStructure;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: FormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: FormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: FormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class DynamicFormComponent {
    constructor(formBuilder, formService) {
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.dynamicForm = this.formBuilder.group({});
    }
    ngOnInit() {
        const formStructure = this.formService.getFormStructure();
        let formGroup = {};
        formStructure.forEach((control) => {
            if (control.type === 'checkbox-group') {
                // Handle checkbox groups differently
                const checkboxControls = {};
                control.options.forEach((option) => {
                    checkboxControls[option.value] = new FormControl(option.checked || false);
                });
                formGroup[control.name] = this.formBuilder.group(checkboxControls);
            }
            else {
                // Handle all other controls
                let controlValidators = [];
                if (control.validations) {
                    control.validations.forEach((validation) => {
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
        }
        else {
            console.log('Form is invalid');
            // Mark all fields as touched to show validation messages
            Object.values(this.dynamicForm.controls).forEach(control => {
                if (control instanceof FormGroup) {
                    Object.values(control.controls).forEach(subControl => {
                        subControl.markAsTouched();
                    });
                }
                else {
                    control.markAsTouched();
                }
            });
        }
    }
    getErrorMessage(control) {
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
    isCheckboxGroup(control) {
        return control.type === 'checkbox-group';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormComponent, deps: [{ token: i1.FormBuilder }, { token: FormService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: DynamicFormComponent, selector: "app-dynamic-form", ngImport: i0, template: "<form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div *ngFor=\"let control of formService.formStructure\">\r\n    <!-- Text, Email, Number, Password, Textarea, Date -->\r\n    <div *ngIf=\"['text', 'email', 'number', 'password', 'textarea', 'date'].includes(control.type)\">\r\n      <label>{{control.label}}</label>\r\n      <textarea *ngIf=\"control.type === 'textarea'\" \r\n                [formControlName]=\"control.name\"\r\n                [placeholder]=\"control.label\"></textarea>\r\n      <input *ngIf=\"control.type !== 'textarea'\" \r\n             [type]=\"control.type\" \r\n             [formControlName]=\"control.name\"\r\n             [placeholder]=\"control.label\">\r\n      <span *ngIf=\"dynamicForm.controls[control.name]?.invalid && dynamicForm.controls[control.name]?.touched\">\r\n        {{getErrorMessage(control)}}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Select Dropdown -->\r\n    <div *ngIf=\"control.type === 'select'\">\r\n      <label>{{control.label}}</label>\r\n      <select [formControlName]=\"control.name\">\r\n        <option *ngFor=\"let option of control.options\" [value]=\"option.value\">{{option.label}}</option>\r\n      </select>\r\n      <span *ngIf=\"dynamicForm.controls[control.name]?.invalid && dynamicForm.controls[control.name]?.touched\">\r\n        {{getErrorMessage(control)}}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Radio Buttons -->\r\n    <div *ngIf=\"control.type === 'radio'\">\r\n      <label>{{control.label}}</label>\r\n      <div *ngFor=\"let option of control.options\" class=\"radio-option\">\r\n        <input type=\"radio\" \r\n               [formControlName]=\"control.name\" \r\n               [value]=\"option.value\"\r\n               [id]=\"control.name + option.value\">\r\n        <label [for]=\"control.name + option.value\">{{option.label}}</label>\r\n      </div>\r\n      <span *ngIf=\"dynamicForm.controls[control.name]?.invalid && dynamicForm.controls[control.name]?.touched\">\r\n        {{getErrorMessage(control)}}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Single Checkbox -->\r\n    <div *ngIf=\"control.type === 'checkbox'\">\r\n      <label class=\"checkbox-label\">\r\n        <input type=\"checkbox\" [formControlName]=\"control.name\">\r\n        {{control.label}}\r\n      </label>\r\n    </div>\r\n\r\n    <!-- Checkbox Group -->\r\n    <div *ngIf=\"isCheckboxGroup(control)\">\r\n      <label>{{control.label}}</label>\r\n      <div formGroupName=\"{{control.name}}\">\r\n        <div *ngFor=\"let option of control.options\" class=\"checkbox-option\">\r\n          <input type=\"checkbox\" \r\n                 [formControlName]=\"option.value\"\r\n                 [id]=\"control.name + option.value\">\r\n          <label [for]=\"control.name + option.value\">{{option.label}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" [disabled]=\"dynamicForm.invalid\">Submit</button>\r\n</form>", styles: ["form{max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;border-radius:8px}div{margin-bottom:15px}label{display:block;margin-bottom:5px;font-weight:700}input[type=text],input[type=email],input[type=number],input[type=password],input[type=date],select,textarea{width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;box-sizing:border-box}textarea{min-height:100px}.radio-option,.checkbox-option{display:flex;align-items:center;margin-bottom:5px}.radio-option input,.checkbox-option input{margin-right:10px}.checkbox-label{display:flex;align-items:center}.checkbox-label input{margin-right:10px}span{color:#e74c3c;font-size:.8em;display:block;margin-top:5px}button{background-color:#3498db;color:#fff;padding:10px 15px;border:none;border-radius:4px;cursor:pointer;font-size:1em}button:disabled{background-color:#95a5a6;cursor:not-allowed}button:hover:not(:disabled){background-color:#2980b9}\n"], dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-form', template: "<form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div *ngFor=\"let control of formService.formStructure\">\r\n    <!-- Text, Email, Number, Password, Textarea, Date -->\r\n    <div *ngIf=\"['text', 'email', 'number', 'password', 'textarea', 'date'].includes(control.type)\">\r\n      <label>{{control.label}}</label>\r\n      <textarea *ngIf=\"control.type === 'textarea'\" \r\n                [formControlName]=\"control.name\"\r\n                [placeholder]=\"control.label\"></textarea>\r\n      <input *ngIf=\"control.type !== 'textarea'\" \r\n             [type]=\"control.type\" \r\n             [formControlName]=\"control.name\"\r\n             [placeholder]=\"control.label\">\r\n      <span *ngIf=\"dynamicForm.controls[control.name]?.invalid && dynamicForm.controls[control.name]?.touched\">\r\n        {{getErrorMessage(control)}}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Select Dropdown -->\r\n    <div *ngIf=\"control.type === 'select'\">\r\n      <label>{{control.label}}</label>\r\n      <select [formControlName]=\"control.name\">\r\n        <option *ngFor=\"let option of control.options\" [value]=\"option.value\">{{option.label}}</option>\r\n      </select>\r\n      <span *ngIf=\"dynamicForm.controls[control.name]?.invalid && dynamicForm.controls[control.name]?.touched\">\r\n        {{getErrorMessage(control)}}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Radio Buttons -->\r\n    <div *ngIf=\"control.type === 'radio'\">\r\n      <label>{{control.label}}</label>\r\n      <div *ngFor=\"let option of control.options\" class=\"radio-option\">\r\n        <input type=\"radio\" \r\n               [formControlName]=\"control.name\" \r\n               [value]=\"option.value\"\r\n               [id]=\"control.name + option.value\">\r\n        <label [for]=\"control.name + option.value\">{{option.label}}</label>\r\n      </div>\r\n      <span *ngIf=\"dynamicForm.controls[control.name]?.invalid && dynamicForm.controls[control.name]?.touched\">\r\n        {{getErrorMessage(control)}}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Single Checkbox -->\r\n    <div *ngIf=\"control.type === 'checkbox'\">\r\n      <label class=\"checkbox-label\">\r\n        <input type=\"checkbox\" [formControlName]=\"control.name\">\r\n        {{control.label}}\r\n      </label>\r\n    </div>\r\n\r\n    <!-- Checkbox Group -->\r\n    <div *ngIf=\"isCheckboxGroup(control)\">\r\n      <label>{{control.label}}</label>\r\n      <div formGroupName=\"{{control.name}}\">\r\n        <div *ngFor=\"let option of control.options\" class=\"checkbox-option\">\r\n          <input type=\"checkbox\" \r\n                 [formControlName]=\"option.value\"\r\n                 [id]=\"control.name + option.value\">\r\n          <label [for]=\"control.name + option.value\">{{option.label}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" [disabled]=\"dynamicForm.invalid\">Submit</button>\r\n</form>", styles: ["form{max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;border-radius:8px}div{margin-bottom:15px}label{display:block;margin-bottom:5px;font-weight:700}input[type=text],input[type=email],input[type=number],input[type=password],input[type=date],select,textarea{width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;box-sizing:border-box}textarea{min-height:100px}.radio-option,.checkbox-option{display:flex;align-items:center;margin-bottom:5px}.radio-option input,.checkbox-option input{margin-right:10px}.checkbox-label{display:flex;align-items:center}.checkbox-label input{margin-right:10px}span{color:#e74c3c;font-size:.8em;display:block;margin-top:5px}button{background-color:#3498db;color:#fff;padding:10px 15px;border:none;border-radius:4px;cursor:pointer;font-size:1em}button:disabled{background-color:#95a5a6;cursor:not-allowed}button:hover:not(:disabled){background-color:#2980b9}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: FormService }]; } });

class DynamicFormModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormModule, declarations: [DynamicFormComponent], imports: [CommonModule, ReactiveFormsModule], exports: [DynamicFormComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormModule, imports: [CommonModule, ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: DynamicFormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DynamicFormComponent
                    ],
                    imports: [CommonModule, ReactiveFormsModule],
                    exports: [
                        DynamicFormComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of dynamic-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DynamicFormComponent, DynamicFormModule, DynamicFormService };
//# sourceMappingURL=dynamic-form-template.mjs.map
