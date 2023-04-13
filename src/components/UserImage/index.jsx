const defaultImage = "https://randomuser.me/api/portraits/med/lego/1.jpg";

function Component({ img, name }) {
  return <img src={img ? img : defaultImage} alt={name ? name : "A User"} />;
}

export default Component;
