import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "."
import CartProvider from "../../context/cartContext"

type Story = StoryObj<typeof Header>

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta

export const Default: Story = {
  render: () => {
    return (
      <>
        <>
          <CartProvider>
            <Header />
          </CartProvider>
        </>
      </>
    )
  },
}
