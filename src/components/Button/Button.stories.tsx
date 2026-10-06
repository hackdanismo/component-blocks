import type { Meta, StoryObj } from '@storybook/react-vite'
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
          'A reusable button component with primary and secondary variants.',
      },
    },
  },

  args: {
    children: 'Button',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Controls the visual style of the button.',
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

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
}