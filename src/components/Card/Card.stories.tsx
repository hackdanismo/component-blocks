import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple card component for grouping short pieces of content. Set unstyled to true to remove the built-in Tailwind styling.',
      },
    },
  },

  args: {
    children:
      'This is a simple card containing a short paragraph of text.',
    unstyled: false,
  },

  argTypes: {
    children: {
      control: 'text',
      description: 'The content displayed inside the card.',
    },

    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind styling when enabled.',
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unstyled: Story = {
  args: {
    unstyled: true,
    children: 'This card has no built-in styling.',
  },
}

export const WithCustomClasses: Story = {
  args: {
    unstyled: true,
    className: 'rounded-md bg-gray-100 p-6',
    children: 'This card is styled entirely with custom classes.',
  },
}