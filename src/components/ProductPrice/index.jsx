function Component({ price, hasDiscount, css }) {
  if (hasDiscount) {
    return (
      <p className={`${css} text-lg font-bold text-gray-400 line-through`}>
        {price}
      </p>
    );
  }

  return <p className={`${css} text-3xl font-bold`}>{price}</p>;
}

export default Component;
