# Angular Dynamic Form

A highly configurable dynamic form component for Angular applications.

## Installation

```bash
npm install angular-dynamic-form
```

## Usage

1. Import the module:

```typescript
import { DynamicFormModule } from 'angular-dynamic-form';

@NgModule({
  imports: [
    // other imports
    DynamicFormModule
  ]
})
export class AppModule { }
```

2. Use the component in your template:

```html
<app-dynamic-form></app-dynamic-form>
```

3. Provide form structure via the FormService:

```typescript
import { FormService } from 'angular-dynamic-form';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  constructor(public formService: FormService) {
    // Customize form structure if needed
    this.formService.formStructure = [
      // your custom form structure
    ];
  }
}
```

## Form Field Configuration

Each form field can have the following properties:

```typescript
{
  type: 'text' | 'email' | 'number' | 'password' | 'textarea' | 'date' | 'select' | 'radio' | 'checkbox' | 'checkbox-group',
  label: string,
  name: string,
  value?: any,
  options?: Array<{ label: string, value: any }>,
  validations?: Array<{
    name: string,
    validator: string,
    message: string,
    value?: any
  }>
}
```

## License

MIT