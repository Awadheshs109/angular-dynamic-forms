# Angular Dynamic Form (JSON Driven)

This project demonstrates how to create a **dynamic reactive form in Angular** that is completely driven by a **JSON configuration**. The form structure, field types, and validations are defined externally, making the solution reusable and highly configurable.

---

## Features

* Dynamic form rendering from JSON configuration
* Supports various field types (text, email, number, password, date, textarea, select, radio buttons, single checkbox, checkbox groups)
* Built-in validation handling (required, email, min/max length, min/max value, pattern)
* Displays error messages dynamically
* Submit button disabled until the form is valid
* Handles nested controls like checkbox groups

---

## Project Structure

* **Dynamic Form Component**: Responsible for rendering form fields dynamically
* **Form Service**: Fetches the form structure (from JSON or API)
* **Reactive Forms Module**: Used for form building, validation, and submission handling
* **Assets**: Stores example JSON form structures

---

## Installation & Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `ng serve`
4. Open your browser at [http://localhost:4200](http://localhost:4200)

---

## Usage

* Define your form structure in JSON (or load it via API)
* The form will automatically render based on this configuration
* Validations and error messages are handled dynamically
* On form submission, values are collected in a single object

---

## Example Output

The form supports:

* Text inputs (name, email, password, etc.)
* Dropdown selections
* Radio button groups
* Single checkboxes
* Checkbox groups
* Textarea inputs

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and open a pull request
