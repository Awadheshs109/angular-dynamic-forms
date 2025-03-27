import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FormService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9keW5hbWljLWZvcm0vc3JjL2xpYi9mb3JtLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sV0FBVztJQUh4QjtRQUlFLGtCQUFhLEdBQUc7WUFDZDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsV0FBVztnQkFDcEIsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLGFBQWEsRUFBRTtvQkFDYjt3QkFDRSxNQUFNLEVBQUUsVUFBVTt3QkFDbEIsV0FBVyxFQUFFLFVBQVU7d0JBQ3ZCLFNBQVMsRUFBRSxrQkFBa0I7cUJBQzlCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsV0FBVzt3QkFDeEIsT0FBTyxFQUFFLENBQUM7d0JBQ1YsU0FBUyxFQUFFLG9DQUFvQztxQkFDaEQ7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxXQUFXO3dCQUN4QixPQUFPLEVBQUUsRUFBRTt3QkFDWCxTQUFTLEVBQUUsa0NBQWtDO3FCQUM5QztpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxFQUFFO2dCQUNYLGFBQWEsRUFBRTtvQkFDYjt3QkFDRSxNQUFNLEVBQUUsVUFBVTt3QkFDbEIsV0FBVyxFQUFFLFVBQVU7d0JBQ3ZCLFNBQVMsRUFBRSxtQkFBbUI7cUJBQy9CO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxPQUFPO3dCQUNmLFdBQVcsRUFBRSxPQUFPO3dCQUNwQixTQUFTLEVBQUUs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dWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuICBmb3JtU3RydWN0dXJlID0gW1xyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXHJcbiAgICAgIFwibGFiZWxcIjogXCJGdWxsIE5hbWVcIixcclxuICAgICAgXCJuYW1lXCI6IFwiZnVsbE5hbWVcIixcclxuICAgICAgXCJ2YWx1ZVwiOiBcIlwiLFxyXG4gICAgICBcInZhbGlkYXRpb25zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiTmFtZSBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJtaW5sZW5ndGhcIixcclxuICAgICAgICAgIFwidmFsaWRhdG9yXCI6IFwibWluTGVuZ3RoXCIsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IDMsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIm1heGxlbmd0aFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJtYXhMZW5ndGhcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogMzAsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJOYW1lIGNhbm5vdCBleGNlZWQgMzAgY2hhcmFjdGVyc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJlbWFpbFwiLFxyXG4gICAgICBcImxhYmVsXCI6IFwiRW1haWwgQWRkcmVzc1wiLFxyXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiLFxyXG4gICAgICBcInZhbHVlXCI6IFwiXCIsXHJcbiAgICAgIFwidmFsaWRhdGlvbnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcInZhbGlkYXRvclwiOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJFbWFpbCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXHJcbiAgICAgIFwibGFiZWxcIjogXCJBZ2VcIixcclxuICAgICAgXCJuYW1lXCI6IFwiYWdlXCIsXHJcbiAgICAgIFwidmFsdWVcIjogXCJcIixcclxuICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwibWluXCIsXHJcbiAgICAgICAgICBcInZhbGlkYXRvclwiOiBcIm1pblwiLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiAxOCxcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkFnZSBtdXN0IGJlIGF0IGxlYXN0IDE4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIm1heFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJtYXhcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogOTksXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJBZ2UgbXVzdCBiZSBsZXNzIHRoYW4gMTAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcInZhbGlkYXRvclwiOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJBZ2UgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgIFwibGFiZWxcIjogXCJQYXNzd29yZFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJwYXNzd29yZFwiLFxyXG4gICAgICBcInZhbHVlXCI6IFwiXCIsXHJcbiAgICAgIFwidmFsaWRhdGlvbnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcInZhbGlkYXRvclwiOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJwYXR0ZXJuXCIsXHJcbiAgICAgICAgICBcInZhbGlkYXRvclwiOiBcInBhdHRlcm5cIixcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxcXGQpLns4LH0kXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlLCBvbmUgbG93ZXJjYXNlLCBhbmQgb25lIG51bWJlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJzZWxlY3RcIixcclxuICAgICAgXCJsYWJlbFwiOiBcIkNvdW50cnlcIixcclxuICAgICAgXCJuYW1lXCI6IFwiY291bnRyeVwiLFxyXG4gICAgICBcInZhbHVlXCI6IFwiXCIsXHJcbiAgICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgICAge1wibGFiZWxcIjogXCJTZWxlY3QgQ291bnRyeVwiLCBcInZhbHVlXCI6IFwiXCJ9LFxyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiVW5pdGVkIFN0YXRlc1wiLCBcInZhbHVlXCI6IFwiVVNcIn0sXHJcbiAgICAgICAge1wibGFiZWxcIjogXCJDYW5hZGFcIiwgXCJ2YWx1ZVwiOiBcIkNBXCJ9LFxyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiVW5pdGVkIEtpbmdkb21cIiwgXCJ2YWx1ZVwiOiBcIlVLXCJ9LFxyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiQXVzdHJhbGlhXCIsIFwidmFsdWVcIjogXCJBVVwifVxyXG4gICAgICBdLFxyXG4gICAgICBcInZhbGlkYXRpb25zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ291bnRyeSBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxyXG4gICAgICBcImxhYmVsXCI6IFwiR2VuZGVyXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImdlbmRlclwiLFxyXG4gICAgICBcInZhbHVlXCI6IFwiXCIsXHJcbiAgICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgICAge1wibGFiZWxcIjogXCJNYWxlXCIsIFwidmFsdWVcIjogXCJtYWxlXCJ9LFxyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiRmVtYWxlXCIsIFwidmFsdWVcIjogXCJmZW1hbGVcIn0sXHJcbiAgICAgICAge1wibGFiZWxcIjogXCJPdGhlclwiLCBcInZhbHVlXCI6IFwib3RoZXJcIn1cclxuICAgICAgXSxcclxuICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgIFwidmFsaWRhdG9yXCI6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkdlbmRlciBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxyXG4gICAgICBcImxhYmVsXCI6IFwiU3Vic2NyaWJlIHRvIE5ld3NsZXR0ZXJcIixcclxuICAgICAgXCJuYW1lXCI6IFwibmV3c2xldHRlclwiLFxyXG4gICAgICBcInZhbHVlXCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveC1ncm91cFwiLFxyXG4gICAgICBcImxhYmVsXCI6IFwiSW50ZXJlc3RzXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImludGVyZXN0c1wiLFxyXG4gICAgICBcIm9wdGlvbnNcIjogW1xyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiVGVjaG5vbG9neVwiLCBcInZhbHVlXCI6IFwidGVjaFwiLCBcImNoZWNrZWRcIjogZmFsc2V9LFxyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiU3BvcnRzXCIsIFwidmFsdWVcIjogXCJzcG9ydHNcIiwgXCJjaGVja2VkXCI6IGZhbHNlfSxcclxuICAgICAgICB7XCJsYWJlbFwiOiBcIk11c2ljXCIsIFwidmFsdWVcIjogXCJtdXNpY1wiLCBcImNoZWNrZWRcIjogZmFsc2V9LFxyXG4gICAgICAgIHtcImxhYmVsXCI6IFwiVHJhdmVsXCIsIFwidmFsdWVcIjogXCJ0cmF2ZWxcIiwgXCJjaGVja2VkXCI6IGZhbHNlfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICBcImxhYmVsXCI6IFwiQmlvXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcImJpb1wiLFxyXG4gICAgICBcInZhbHVlXCI6IFwiXCIsXHJcbiAgICAgIFwidmFsaWRhdGlvbnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIm1heGxlbmd0aFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJtYXhMZW5ndGhcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogNTAwLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQmlvIGNhbm5vdCBleGNlZWQgNTAwIGNoYXJhY3RlcnNcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxyXG4gICAgICBcImxhYmVsXCI6IFwiQmlydGggRGF0ZVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJiaXJ0aERhdGVcIixcclxuICAgICAgXCJ2YWx1ZVwiOiBcIlwiLFxyXG4gICAgICBcInZhbGlkYXRpb25zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJ2YWxpZGF0b3JcIjogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQmlydGggZGF0ZSBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgZ2V0Rm9ybVN0cnVjdHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1TdHJ1Y3R1cmU7XHJcbiAgfVxyXG59Il19