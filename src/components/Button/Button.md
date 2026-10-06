# Button

A reusable button component for actions, calls to action, and form interactions.

The component renders a native HTML `<button>` element and supports all standard React button attributes.

## Import

```tsx
import { Button } from 'component-blocks'
```

## Basic usage

```tsx
<Button>
  Button
</Button>
```

## Variants

### Primary

The default variant.

```tsx
<Button variant="primary">
  Save
</Button>
```

### Secondary

Use for less prominent or supporting actions.

```tsx
<Button variant="secondary">
  Cancel
</Button>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | Content displayed inside the button. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Controls the visual style of the button. |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Controls the native HTML button behaviour. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `className` | `string` | `''` | Additional CSS or Tailwind classes to apply to the button. |
| `onClick` | `MouseEventHandler<HTMLButtonElement>` | — | Called when the button is clicked. |
| `name` | `string` | — | Name of the button when used in a form. |
| `value` | `string \| number \| readonly string[]` | — | Value associated with the button when used in a form. |
| `form` | `string` | — | Associates the button with a form by its `id`. |
| `formAction` | `string` | — | Overrides the form action when the button submits a form. |
| `formMethod` | `'get' \| 'post'` | — | Overrides the form submission method. |
| `formNoValidate` | `boolean` | — | Disables form validation when submitting with this button. |
| `formTarget` | `string` | — | Specifies where the form response should be displayed. |
| `autoFocus` | `boolean` | — | Gives the button focus when rendered. |
| `tabIndex` | `number` | — | Controls keyboard tab order. |
| `title` | `string` | — | Provides additional information about the button. |
| `id` | `string` | — | HTML `id` attribute. |
| `aria-*` | ARIA attributes | — | Supports standard ARIA accessibility attributes. |
| `data-*` | Data attributes | — | Supports custom HTML data attributes. |

Because `ButtonProps` extends:

```ts
ButtonHTMLAttributes<HTMLButtonElement>
```

the component also accepts all standard React attributes supported by a native HTML `<button>` element.

## Button type

The component defaults to:

```tsx
type="button"
```

This prevents a button rendered inside a form from accidentally submitting the form.

### Standard button

```tsx
<Button>
  Open dialog
</Button>
```

### Submit button

```tsx
<Button type="submit">
  Submit
</Button>
```

### Reset button

```tsx
<Button type="reset" variant="secondary">
  Reset
</Button>
```

## Click events

Use `onClick` to respond to user interaction.

```tsx
<Button onClick={() => console.log('Clicked')}>
  Click me
</Button>
```

## Disabled state

Use the native `disabled` attribute when the action is unavailable.

```tsx
<Button disabled>
  Disabled
</Button>
```

Disabled buttons cannot be clicked or focused using normal keyboard navigation.

## Custom classes

Additional classes can be supplied using `className`.

```tsx
<Button className="w-full">
  Continue
</Button>
```

The custom classes are appended to the component's built-in classes.

## Accessibility

The component renders a native `<button>` element, giving it built-in keyboard and assistive-technology behaviour.

Whenever possible, give the button meaningful visible text:

```tsx
<Button>
  Save changes
</Button>
```

For buttons whose content does not provide a clear accessible name, use an ARIA label:

```tsx
<Button aria-label="Close dialog">
  ×
</Button>
```

Use `disabled` when an action cannot currently be performed:

```tsx
<Button disabled>
  Submit
</Button>
```

Use a link rather than a button when the primary purpose of the interaction is navigation.

## Examples

### Primary CTA

```tsx
<Button variant="primary">
  Get started
</Button>
```

### Secondary action

```tsx
<Button variant="secondary">
  Cancel
</Button>
```

### Form submission

```tsx
<form>
  <Button type="submit">
    Submit
  </Button>
</form>
```

### Click handler

```tsx
<Button onClick={() => alert('Clicked')}>
  Click me
</Button>
```

### Disabled

```tsx
<Button disabled>
  Unavailable
</Button>
```