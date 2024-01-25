function Component({ price, hasDiscount }) {
  if (hasDiscount) {
    return (
      <p>{price}</p>
    )
  }

  return (
    <p className="font-bold text-lg">{price}</p>
  )
}

export default Component

