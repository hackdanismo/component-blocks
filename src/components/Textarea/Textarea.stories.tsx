import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable textarea component that supports standard HTML textarea attributes and an error state.',
      },
    },
  },

  args: {
    placeholder: 'Enter your message',
    rows: 4,
  },

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the textarea is empty.',
    },

    rows: {
      control: 'number',
      description: 'Sets the visible number of text rows.',
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the textarea.',
    },

    required: {
      control: 'boolean',
      description: 'Marks the textarea as required.',
    },

    error: {
      control: 'boolean',
      description: 'Applies the error styling and sets aria-invalid.',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'This is some example text.',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    placeholder: 'Required textarea',
    required: true,
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Enter your message',
    error: true,
    'aria-describedby': 'message-error',
  },
}