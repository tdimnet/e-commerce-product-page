import ProductImage from "../../components/ProductImage";
import ArrowIcon from "../../icons/Arrow";

import image from "../../images/image-product-1.jpg";

function Container() {
  function handleIcons(kind) {
    console.log("=====");
    console.log(kind);
    console.log("=====");
  }

  return (
    <div className="relative">
      <ArrowIcon css="absolute left-0 top-[50%] bg-white rounded-full h-10 w-10" onClick={() => handleIcons("previous")} kind="previous" />
      <ProductImage src={image} />
      <ArrowIcon css="absolute right-0 top-[50%] bg-white rounded rounded-full h-10 w-10" onClick={() => handleIcons("next")} />
    </div>
  );
}

export default Container;
