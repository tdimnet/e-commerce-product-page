import image from "../../images/image-product-1.jpg"

import ProductImage from ".";

export default {
  title: "Components/ProductImage",
  component: ProductImage,
};

export const Default = {
  args: {
    src: image,
    alt: "A sneaker"
  },
};
