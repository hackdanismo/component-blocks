import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioButton } from './RadioButton'

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable radio button component built on the native HTML radio input.',
      },
    },
  },

  args: {
    name: 'example',
    value: 'option',
    'aria-label': 'Example radio button',
  },

  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls whether the radio button is selected.',
    },

    disabled: {
      control: 'boolean',
      description: 'Disables the radio button.',
    },

    required: {
      control: 'boolean',
      description: 'Marks the radio button as required.',
    },

    name: {
      control: 'text',
      description:
        'Groups radio buttons together so only one option can be selected.',
    },

    value: {
      control: 'text',
      description: 'The value submitted when the radio button is selected.',
    },
  },
} satisfies Meta<typeof RadioButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledSelected: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}