import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable checkbox component built on the native HTML checkbox input.',
      },
    },
  },

  args: {
    'aria-label': 'Example checkbox',
  },

  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls whether the checkbox is checked.',
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox.',
    },

    required: {
      control: 'boolean',
      description: 'Marks the checkbox as required.',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}