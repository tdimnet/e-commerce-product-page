import { useCart } from "../../contexts/Cart"

import BasketIcon from "../../icons/Basket"

function Container({ onClick }) {
  const { cart } = useCart()

  console.log("=====")
  console.log(cart)
  console.log("=====")

  return (
    <div className="relative">
      {
        cart.length > 0 && 
        <span className="absolute bg-orange-500 text-white text-xs rounded-lg h-4 w-6 flex items-center justify-center -right-3 -top-2">{cart}</span>
      }
      <BasketIcon onClick={onClick} />
    </div>
  )
}

export default Container

