function Component({ content, css }) {
  return <li className={`${css} md:mr-8`}>{content}</li>;
}

export default Component;
