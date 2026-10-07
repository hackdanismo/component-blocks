import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple accessible accordion built with the native details and summary elements. Set unstyled to true to remove the built-in Tailwind styling.',
      },
    },
  },

  args: {
    title: 'Accordion title',
    children:
      'This is the accordion content. It can contain text or other React components.',
    unstyled: false,
  },

  argTypes: {
    title: {
      control: 'text',
      description: 'The clickable heading displayed in the accordion.',
    },

    open: {
      control: 'boolean',
      description: 'Controls whether the accordion is initially open.',
    },

    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind styling when enabled.',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Open: Story = {
  args: {
    title: 'Open accordion',
    open: true,
    children:
      'This accordion is open by default using the native open attribute.',
  },
}

export const WithLongContent: Story = {
  args: {
    title: 'More information',
    children:
      'This is a longer piece of content to demonstrate how the accordion behaves when more text is displayed inside the panel. The content area expands naturally based on its contents.',
  },
}

export const Unstyled: Story = {
  args: {
    title: 'Custom styled accordion',
    unstyled: true,
    className: 'w-96 rounded-lg border-2 border-purple-500 bg-purple-50 p-4',
    children:
      'This accordion has no built-in component styling and uses custom classes supplied through className.',
  },
}