import type { Meta, StoryObj } from "@storybook/react"
import { CardProduct } from "."

type Story = StoryObj<typeof CardProduct>

const meta: Meta<typeof CardProduct> = {
  component: CardProduct,
  parameters: {
    layout: "centered",
  },
}
export default meta

export const Default: Story = {
  args: {
    id: 1,
    image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
    price: 9.99,
    title: "Viúva Negra",
    onClick: () => {},
  },
}
