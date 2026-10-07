import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel } from './Carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple carousel component with previous and next controls, slide indicators, looping navigation, and an optional unstyled mode.',
      },
    },
  },

  args: {
    initialSlide: 0,
    unstyled: false,
  },

  argTypes: {
    initialSlide: {
      control: 'number',
      description: 'The zero-based index of the slide shown initially.',
    },

    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind styling when enabled.',
    },
  },
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

const slides = [
  {
    id: 1,
    src: 'https://picsum.photos/800/450?random=1',
    alt: 'Example landscape one',
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/450?random=2',
    alt: 'Example landscape two',
  },
  {
    id: 3,
    src: 'https://picsum.photos/800/450?random=3',
    alt: 'Example landscape three',
  },
]

export const Default: Story = {
  render: (args) => (
    <div className="w-[800px] max-w-full">
      <Carousel {...args}>
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className="aspect-video w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  ),
}

export const WithContentCards: Story = {
  render: (args) => (
    <div className="w-[600px] max-w-full">
      <Carousel {...args}>
        <div className="min-h-64 bg-blue-600 p-10 text-white">
          <h2 className="mb-3 text-2xl font-bold">
            First slide
          </h2>

          <p>
            This carousel can contain any React content, not just images.
          </p>
        </div>

        <div className="min-h-64 bg-purple-600 p-10 text-white">
          <h2 className="mb-3 text-2xl font-bold">
            Second slide
          </h2>

          <p>
            Add headings, text, buttons, cards, or other components.
          </p>
        </div>

        <div className="min-h-64 bg-green-700 p-10 text-white">
          <h2 className="mb-3 text-2xl font-bold">
            Third slide
          </h2>

          <p>
            Navigation loops from the last slide back to the first.
          </p>
        </div>
      </Carousel>
    </div>
  ),
}

export const StartOnSecondSlide: Story = {
  args: {
    initialSlide: 1,
  },

  render: (args) => (
    <div className="w-[800px] max-w-full">
      <Carousel {...args}>
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className="aspect-video w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  ),
}

export const Unstyled: Story = {
  args: {
    unstyled: true,
    className:
      'relative w-full overflow-hidden rounded-xl border-4 border-purple-500',
  },

  render: (args) => (
    <div className="w-[800px] max-w-full">
      <Carousel {...args}>
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className="aspect-video w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  ),
}