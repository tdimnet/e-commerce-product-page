function Component({ price, hasDiscount, css }) {
  if (hasDiscount) {
    return (
      <p className={`${css} line-through`}>{price}</p>
    )
  }

  return (
    <p className={`${css} font-bold text-lg`}>{price}</p>
  )
}

export default Component

