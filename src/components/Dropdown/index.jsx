import { useCart } from "../../contexts/Cart";

function Component({ css }) {
  const { cart } = useCart();

  console.log("======");
  console.log(cart);
  console.log("======");

  return (
    <div className={`${css} w-full rounded-lg bg-white py-6`}>
      <p className="mb-6 px-6">Cart</p>
      <hr className="mb-6" />
      <p className="flex h-32 items-center justify-center">
        Your cart is empty
      </p>
    </div>
  );
}

export default Component;
