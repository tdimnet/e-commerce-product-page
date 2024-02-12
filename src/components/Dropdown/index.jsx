function Component({ css }) {
  return (
    <div className={`${css} bg-white w-full py-6 rounded-lg`}>
      <p className="mb-6 px-6">Cart</p>
      <hr className="mb-6" />
      <p className="flex items-center justify-center h-32">Your cart is empty</p>
    </div>
  );
}

export default Component;
