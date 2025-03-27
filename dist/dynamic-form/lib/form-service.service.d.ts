import * as i0 from "@angular/core";
export declare class FormService {
    formStructure: ({
        type: string;
        label: string;
        name: string;
        value: string;
        validations: ({
            name: string;
            validator: string;
            message: string;
            value?: undefined;
        } | {
            name: string;
            validator: string;
            value: number;
            message: string;
        })[];
        options?: undefined;
    } | {
        type: string;
        label: string;
        name: string;
        value: string;
        validations: ({
            name: string;
            validator: string;
            message: string;
            value?: undefined;
        } | {
            name: string;
            validator: string;
            value: string;
            message: string;
        })[];
        options?: undefined;
    } | {
        type: string;
        label: string;
        name: string;
        value: string;
        options: {
            label: string;
            value: string;
        }[];
        validations: {
            name: string;
            validator: string;
            message: string;
        }[];
    } | {
        type: string;
        label: string;
        name: string;
        value: boolean;
        validations?: undefined;
        options?: undefined;
    } | {
        type: string;
        label: string;
        name: string;
        options: {
            label: string;
            value: string;
            checked: boolean;
        }[];
        value?: undefined;
        validations?: undefined;
    })[];
    getFormStructure(): ({
        type: string;
        label: string;
        name: string;
        value: string;
        validations: ({
            name: string;
            validator: string;
            message: string;
            value?: undefined;
        } | {
            name: string;
            validator: string;
            value: number;
            message: string;
        })[];
        options?: undefined;
    } | {
        type: string;
        label: string;
        name: string;
        value: string;
        validations: ({
            name: string;
            validator: string;
            message: string;
            value?: undefined;
        } | {
            name: string;
            validator: string;
            value: string;
            message: string;
        })[];
        options?: undefined;
    } | {
        type: string;
        label: string;
        name: string;
        value: string;
        options: {
            label: string;
            value: string;
        }[];
        validations: {
            name: string;
            validator: string;
            message: string;
        }[];
    } | {
        type: string;
        label: string;
        name: string;
        value: boolean;
        validations?: undefined;
        options?: undefined;
    } | {
        type: string;
        label: string;
        name: string;
        options: {
            label: string;
            value: string;
            checked: boolean;
        }[];
        value?: undefined;
        validations?: undefined;
    })[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FormService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormService>;
}
