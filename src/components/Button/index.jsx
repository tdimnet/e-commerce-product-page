function Component({ content, icon, onClick }) {
  if (icon) {
    return (
      <button
        onClick={onClick}
        className="relative h-14 w-full rounded-md bg-orange-400 text-white"
      >
        <span className="absolute left-20 md:left-8">{icon({ color: "white" })}</span>
        {content}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="h-14 w-80 rounded-md bg-orange-400 text-white"
    >
      {content}
    </button>
  );
}

export default Component;
