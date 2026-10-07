import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from '../Card/Card'
import { CardContainer } from './CardContainer'

const meta = {
  title: 'Components/CardContainer',
  component: CardContainer,

  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A responsive grid container for cards. The number of columns can be configured independently for mobile, tablet, and desktop layouts. Cards within the same row are stretched to equal heights.',
      },
    },
  },

  args: {
    mobileColumns: 1,
    tabletColumns: 2,
    desktopColumns: 3,
    unstyled: false,
  },

  argTypes: {
    mobileColumns: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Number of cards displayed per row on mobile.',
    },

    tabletColumns: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Number of cards displayed per row on tablet.',
    },

    desktopColumns: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Number of cards displayed per row on desktop.',
    },

    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind grid styling.',
    },
  },

  render: (args) => (
    <CardContainer {...args}>
      <Card>
        <p>Short card.</p>
      </Card>

      <Card>
        <p>
          This card has more content so you can see the equal-height behaviour.
        </p>
      </Card>

      <Card>
        <p>Another card.</p>
      </Card>

      <Card>
        <p>
          This card contains considerably more content than the others, which
          helps demonstrate that the cards within the same row remain equal in
          height.
        </p>
      </Card>

      <Card>
        <p>Short content.</p>
      </Card>

      <Card>
        <p>One final card with a medium amount of content.</p>
      </Card>
    </CardContainer>
  ),
} satisfies Meta<typeof CardContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoColumns: Story = {
  args: {
    mobileColumns: 1,
    tabletColumns: 2,
    desktopColumns: 2,
  },
}

export const ThreeColumns: Story = {
  args: {
    mobileColumns: 1,
    tabletColumns: 2,
    desktopColumns: 3,
  },
}

export const FourColumns: Story = {
  args: {
    mobileColumns: 1,
    tabletColumns: 2,
    desktopColumns: 4,
  },
}

export const Unstyled: Story = {
  args: {
    unstyled: true,
    className:
      'grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch',
  },
  render: (args) => (
    <CardContainer {...args}>
      <Card
        unstyled
        className="h-full rounded-lg border border-gray-300 bg-white p-4"
      >
        <p>Short card.</p>
      </Card>

      <Card
        unstyled
        className="h-full rounded-lg border border-gray-300 bg-white p-4"
      >
        <p>
          This card has more content so you can verify that the custom layout
          still keeps cards aligned.
        </p>
      </Card>

      <Card
        unstyled
        className="h-full rounded-lg border border-gray-300 bg-white p-4"
      >
        <p>Another card.</p>
      </Card>
    </CardContainer>
  ),
}