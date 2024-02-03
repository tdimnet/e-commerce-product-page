import Counter from ".";

export default {
  title: "Components/Counter",
  component: Counter,
};

export const Default = {
  args: {
    onClick: () => {},
    counter: 2,
  },
};
