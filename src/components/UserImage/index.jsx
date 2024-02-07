const defaultImage = "https://randomuser.me/api/portraits/med/lego/1.jpg";

function Component({ img, name }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-slate-100 md:h-8 md:w-8"
      src={img ? img : defaultImage}
      alt={name ? name : "A User"}
    />
  );
}

export default Component;
