function Component({ name, css }) {
  return <h1 className={`${css} text-3xl font-bold capitalize`}>{name}</h1>;
}

export default Component;
