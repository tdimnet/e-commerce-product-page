function Component({ price, hasDiscount }) {
  if (hasDiscount) {
    return (
      <p className="line-through">{price}</p>
    )
  }

  return (
    <p className="font-bold text-lg">{price}</p>
  )
}

export default Component

