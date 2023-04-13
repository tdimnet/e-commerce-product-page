const defaultImage = "https://randomuser.me/api/portraits/med/lego/1.jpg";

function Component({ img, name }) {
  return <img className="h-12 w-12 rounded" src={img ? img : defaultImage} alt={name ? name : "A User"} />;
}

export default Component;
