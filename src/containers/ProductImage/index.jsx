import { useState } from "react";

import ProductImage from "../../components/ProductImage";
import ArrowIcon from "../../icons/Arrow";

import imagesHandlerUtil from "../../utils/carrouselImagesHandler";

import firstImage from "../../images/image-product-1.jpg";
import secondImage from "../../images/image-product-2.jpg";
import thirdImage from "../../images/image-product-3.jpg";
import fourthImage from "../../images/image-product-4.jpg";

const IMAGES = [firstImage, secondImage, thirdImage, fourthImage];

function Container() {
  const [image, setImage] = useState(IMAGES[0]);

  function onChangeImage(kind) {
    const currentIndex = IMAGES.indexOf(image);
    const newImageIndex = imagesHandlerUtil(IMAGES.length, currentIndex, kind);

    setImage(IMAGES[newImageIndex]);
  }

  return (
    <div className="h-[300px] md:h-[445px] md:w-[445px]">
      <div className="relative md:mb-8">
        <ArrowIcon
          css="absolute left-0 top-[50%] bg-white rounded-full h-10 w-10 flex items-center justify-center md:hidden"
          onClick={() => onChangeImage("previous")}
          kind="previous"
        />
        <ProductImage src={image} />
        <ArrowIcon
          css="absolute right-0 top-[50%] bg-white rounded rounded-full h-10 w-10 flex items-center justify-center md:hidden"
          onClick={() => onChangeImage("next")}
        />
      </div>
      <div className="hidden md:grid md:grid-cols-4 gap-8">
        {
          IMAGES.map((image, index) => <ProductImage src={image} css="rounded cursor-pointer hover:opacity-80" onClick={() => setImage(IMAGES[index])} />)
        }
      </div>
    </div>
  );
}

export default Container;
