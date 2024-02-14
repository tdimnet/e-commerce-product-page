function Component({ src, alt, css, onClick }) {
  return (
    <img
      onClick={onClick}
      className={`${css} w-full h-full object-cover`}
      src={src}
      alt={alt}
    />
  );
}

export default Component;
