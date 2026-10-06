import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './Link'

const meta = {
  title: 'Components/Link',
  component: Link,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable link component that renders a native anchor element and supports standard HTML anchor attributes.',
      },
    },
  },

  args: {
    children: 'Example link',
    href: '#',
    variant: 'primary',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Controls the visual style of the link.',
    },

    href: {
      control: 'text',
      description: 'The destination URL for the link.',
    },

    children: {
      control: 'text',
      description: 'The content displayed inside the link.',
    },

    target: {
      control: 'select',
      options: ['_self', '_blank'],
      description: 'Controls where the linked document opens.',
    },
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary link',
    href: '#',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary link',
    href: '#',
  },
}

export const External: Story = {
  args: {
    variant: 'primary',
    children: 'Open example.com',
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
}