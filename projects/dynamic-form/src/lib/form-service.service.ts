import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formStructure = [
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
        {"label": "Select Country", "value": ""},
        {"label": "United States", "value": "US"},
        {"label": "Canada", "value": "CA"},
        {"label": "United Kingdom", "value": "UK"},
        {"label": "Australia", "value": "AU"}
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
        {"label": "Male", "value": "male"},
        {"label": "Female", "value": "female"},
        {"label": "Other", "value": "other"}
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
        {"label": "Technology", "value": "tech", "checked": false},
        {"label": "Sports", "value": "sports", "checked": false},
        {"label": "Music", "value": "music", "checked": false},
        {"label": "Travel", "value": "travel", "checked": false}
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

  getFormStructure() {
    return this.formStructure;
  }
}