import Button from '.'
import Basket from "../../icons/Basket"

export default {
  title: "Components/Button",
  component: Button
}

export const Primary = {
  args: {
    content: "Checkout"
  }
}

export const WithIcon = {
  args: {
    content: "Add to cart",
    icon: Basket
  }
}
