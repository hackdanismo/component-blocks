import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,

  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A simple sidebar component for navigation or supporting page content. Set unstyled to true to remove the built-in Tailwind styling.',
      },
    },
  },

  args: {
    unstyled: false,
  },

  argTypes: {
    unstyled: {
      control: 'boolean',
      description: 'Removes the built-in Tailwind styling when enabled.',
    },
  },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <Sidebar {...args}>
        <nav aria-label="Sidebar navigation">
          <ul className="space-y-2">
            <li>
              <a
                href="#dashboard"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#settings"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </div>
  ),
}

export const WithHeading: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <Sidebar {...args}>
        <h2 className="mb-4 text-lg font-semibold">
          Navigation
        </h2>

        <nav aria-label="Sidebar navigation">
          <ul className="space-y-2">
            <li>
              <a
                href="#overview"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Overview
              </a>
            </li>

            <li>
              <a
                href="#activity"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Activity
              </a>
            </li>

            <li>
              <a
                href="#account"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Account
              </a>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </div>
  ),
}

export const Unstyled: Story = {
  args: {
    unstyled: true,
    className:
      'w-72 border-r-2 border-purple-500 bg-purple-50 p-6 min-h-screen',
  },

  render: (args) => (
    <Sidebar {...args}>
      <h2 className="mb-4 text-lg font-bold text-purple-900">
        Custom Sidebar
      </h2>

      <nav aria-label="Custom sidebar navigation">
        <ul className="space-y-2">
          <li>
            <a
              href="#one"
              className="block rounded-md px-3 py-2 text-purple-800 hover:bg-purple-100"
            >
              Item one
            </a>
          </li>

          <li>
            <a
              href="#two"
              className="block rounded-md px-3 py-2 text-purple-800 hover:bg-purple-100"
            >
              Item two
            </a>
          </li>

          <li>
            <a
              href="#three"
              className="block rounded-md px-3 py-2 text-purple-800 hover:bg-purple-100"
            >
              Item three
            </a>
          </li>
        </ul>
      </nav>
    </Sidebar>
  ),
}