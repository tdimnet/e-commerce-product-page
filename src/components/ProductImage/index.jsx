function Component({ src, alt, css, onClick }) {
  return (
    <img
      onClick={onClick}
      className={`${css} h-full w-full object-cover`}
      src={src}
      alt={alt}
    />
  );
}

export default Component;
