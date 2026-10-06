import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable button component with primary and secondary variants. It supports standard HTML button attributes, including type, disabled, and click handlers. Set unstyled to true to remove the built-in Tailwind styling.',
      },
    },
  },

  args: {
    children: 'Button',
    type: 'button',
    unstyled: false,
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Controls the visual style of the button.',
    },

    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind styling when enabled.',
    },

    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Controls the native HTML button type.',
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the button when enabled.',
    },

    children: {
      control: 'text',
      description: 'The content displayed inside the button.',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Unstyled: Story = {
  args: {
    children: 'Unstyled Button',
    unstyled: true,
  },
}

export const UnstyledWithCustomClasses: Story = {
  args: {
    children: 'Custom Button',
    unstyled: true,
    className:
      'border border-purple-600 px-4 py-2 text-purple-600 hover:bg-purple-50',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
}

export const Submit: Story = {
  args: {
    variant: 'primary',
    children: 'Submit',
    type: 'submit',
  },
}

export const Reset: Story = {
  args: {
    variant: 'secondary',
    children: 'Reset',
    type: 'reset',
  },
}

export const WithClickHandler: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
    onClick: fn(),
  },
}