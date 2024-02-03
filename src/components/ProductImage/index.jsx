function Component({ src, alt }) {
  return (
    <img
      className="h-[300px] w-full object-cover md:h-[445px]"
      src={src}
      alt={alt}
    />
  );
}

export default Component;
