import { useCart } from "../../contexts/Cart";

import BasketIcon from "../../icons/Basket";

function Container({ onClick }) {
  const { cart } = useCart();

  return (
    <div className="relative">
      {cart.length > 0 && (
        <span className="absolute -right-3 -top-2 flex h-4 w-6 items-center justify-center rounded-lg bg-orange-500 text-xs text-white">
          {cart}
        </span>
      )}
      <BasketIcon onClick={onClick} />
    </div>
  );
}

export default Container;
