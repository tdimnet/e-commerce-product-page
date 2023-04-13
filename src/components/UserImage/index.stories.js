import UserImage from ".";

export default {
  title: "Components/UserImage",
  component: UserImage,
};

export const DefaultPicture = {
  args: {},
};

export const UserPicture = {
  args: {
    img: "https://randomuser.me/api/portraits/med/men/75.jpg",
    name: "Arron Montgomery",
  },
};
