import { Meta, StoryObj } from "@storybook/react"
import { Search } from "."

type Story = StoryObj<typeof Search>

const meta: Meta<typeof Search> = {
  component: Search,
}

export default meta

export const Default: Story = {}
