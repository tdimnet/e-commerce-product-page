function Component({ content, icon }) {
  if (icon) {
    return (
      <button className="relative h-14 w-full rounded-md bg-orange-400 text-white">
        <span className="absolute left-20">{icon({ color: "white" })}</span>
        {content}
      </button>
    );
  }

  return (
    <button className="h-14 w-80 rounded-md bg-orange-400 text-white">
      {content}
    </button>
  );
}

export default Component;
