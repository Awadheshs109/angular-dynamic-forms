import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from './form-service.service';
import * as i0 from "@angular/core";
export declare class DynamicFormComponent implements OnInit {
    private formBuilder;
    formService: FormService;
    dynamicForm: FormGroup;
    constructor(formBuilder: FormBuilder, formService: FormService);
    ngOnInit(): void;
    onSubmit(): void;
    getErrorMessage(control: any): any;
    isCheckboxGroup(control: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormComponent, "app-dynamic-form", never, {}, {}, never, never, false, never>;
}
