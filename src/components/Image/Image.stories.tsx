import type { Meta, StoryObj } from '@storybook/react-vite'
import { Image } from './Image'

const meta = {
  title: 'Components/Image',
  component: Image,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple responsive image component built on the native HTML img element. Set unstyled to true to remove the built-in Tailwind styling.',
      },
    },
  },

  args: {
    src: 'https://picsum.photos/600/400',
    alt: 'Example landscape',
    unstyled: false,
  },

  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL of the image.',
    },

    alt: {
      control: 'text',
      description:
        'Alternative text describing the image for assistive technologies.',
    },

    width: {
      control: 'number',
      description: 'Sets the intrinsic width of the image.',
    },

    height: {
      control: 'number',
      description: 'Sets the intrinsic height of the image.',
    },

    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
      description: 'Controls how the browser loads the image.',
    },

    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind styling when enabled.',
    },
  },
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LazyLoaded: Story = {
  args: {
    src: 'https://picsum.photos/600/400?random=2',
    alt: 'Example landscape loaded lazily',
    loading: 'lazy',
  },
}

export const Decorative: Story = {
  args: {
    src: 'https://picsum.photos/600/400?random=3',
    alt: '',
  },
}

export const Unstyled: Story = {
  args: {
    src: 'https://picsum.photos/600/400?random=4',
    alt: 'Custom styled example image',
    unstyled: true,
    className:
      'h-64 w-96 rounded-2xl border-4 border-purple-500 object-cover shadow-lg',
  },
}