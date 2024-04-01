import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "."

type Story = StoryObj<typeof Header>

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta

export const Default: Story = {}
