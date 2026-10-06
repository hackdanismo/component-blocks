import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'

const meta = {
  title: 'Components/Label',
  component: Label,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable label component for form controls. Use htmlFor to associate the label with an input element.',
      },
    },
  },

  args: {
    children: 'Email address',
  },

  argTypes: {
    children: {
      control: 'text',
      description: 'The text or content displayed inside the label.',
    },

    htmlFor: {
      control: 'text',
      description:
        'The id of the form control associated with this label.',
    },
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email address',
  },
}

export const WithInputAssociation: Story = {
  args: {
    children: 'Password',
    htmlFor: 'password',
  },
}