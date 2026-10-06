import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable input component that supports standard HTML input attributes and an error state.',
      },
    },
  },

  args: {
    type: 'text',
    placeholder: 'Enter text',
  },

  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
      ],
      description: 'Sets the native HTML input type.',
    },

    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the input is empty.',
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
    },

    required: {
      control: 'boolean',
      description: 'Marks the input as required.',
    },

    error: {
      control: 'boolean',
      description: 'Applies the error styling and sets aria-invalid.',
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email address',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    placeholder: 'Required input',
    required: true,
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Invalid value',
    error: true,
    'aria-describedby': 'input-error',
  },
}