# Medical Checkup Form Component

This component provides a user-friendly interface for filling out medical checkup forms. It includes fields for name, age, gender, address, diagnosis, contact information, personal history, family history, and pain score.

## Installation

To install the necessary packages for this component, run the following commands:

```bash
npm install @angular/material
npm install @ng-select/ng-select
```

## Usage

1. Import `MatFormFieldModule`, `CommonModule`, `NgSelectModule`, and `ReactiveFormsModule` in your Angular module.
2. Use the `EvaluationComponent` selector in your HTML template to include the medical checkup form.

```html
<app-evaluation></app-evaluation>
```

## Component Features

- Form validation for required fields and specific patterns.
- Maximum character limit for the name field (1 to 50 characters).
- Error messages displayed for invalid input.
- Resizable textarea with a maximum height for personal and family history.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
