function Component({ src, alt }) {
  return (
    <img
      className="w-full h-full object-cover"
      src={src}
      alt={alt}
    />
  );
}

export default Component;
