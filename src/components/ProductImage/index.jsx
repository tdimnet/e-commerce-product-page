function Component({ src, alt, css }) {
  return (
    <img
      className={`${css} w-full h-full object-cover`}
      src={src}
      alt={alt}
    />
  );
}

export default Component;
