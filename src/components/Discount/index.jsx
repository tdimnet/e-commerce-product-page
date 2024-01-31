function Component({ css, discountValue }) {
  return <p className={`${css} bg-orange-100 inline py-1 px-2 rounded-lg font-bold text-orange-500`}>{discountValue}</p>
}

export default Component

