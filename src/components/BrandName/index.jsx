function Component({ name, css }) {
  return <p className={`${css} text-base uppercase text-orange-300`}>{name}</p>;
}

export default Component;
