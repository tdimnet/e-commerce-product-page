import Arrow from ".";

export default {
  title: "Icons/Arrow",
  component: Arrow,
};

export const DefaultIcon = {
  args: {},
};

export const NextIcon = {
  args: {
    onClick: () => {},
  },
};

export const PreviousIcon = {
  args: {
    onClick: () => {},
    kind: "previous",
  },
};
