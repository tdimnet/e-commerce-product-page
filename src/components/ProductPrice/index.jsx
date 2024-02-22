function Component({ price, hasDiscount, css }) {
  if (hasDiscount) {
    return <p className={`${css} text-gray-400 font-bold text-lg line-through`}>{price}</p>;
  }

  return <p className={`${css} text-3xl font-bold`}>{price}</p>;
}

export default Component;
