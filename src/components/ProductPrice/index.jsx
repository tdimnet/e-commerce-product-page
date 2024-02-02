function Component({ price, hasDiscount, css }) {
  if (hasDiscount) {
    return <p className={`${css} line-through`}>{price}</p>;
  }

  return <p className={`${css} text-lg font-bold`}>{price}</p>;
}

export default Component;
