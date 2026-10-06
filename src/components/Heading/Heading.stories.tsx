import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from './Heading'

const meta = {
  title: 'Components/Heading',
  component: Heading,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable heading component that renders an h1 or h2 based on the level prop.',
      },
    },
  },

  args: {
    children: 'Heading',
    level: 1,
  },

  argTypes: {
    level: {
      control: 'select',
      options: [1, 2],
      description: 'Sets the semantic heading level and visual size.',
    },

    children: {
      control: 'text',
      description: 'The content displayed inside the heading.',
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    level: 1,
    children: 'Main page heading',
  },
}

export const H2: Story = {
  args: {
    level: 2,
    children: 'Section heading',
  },
}