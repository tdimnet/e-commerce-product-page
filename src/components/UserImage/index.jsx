const defaultImage = "https://randomuser.me/api/portraits/med/lego/1.jpg";

function Component({ img, name }) {
  return (
    <img
      className="h-6 w-6 rounded-full border border-slate-100 md:h-12 md:w-12"
      src={img ? img : defaultImage}
      alt={name ? name : "A User"}
    />
  );
}

export default Component;
