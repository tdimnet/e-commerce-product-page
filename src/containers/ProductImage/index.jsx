import { useState } from 'react'

import ProductImage from "../../components/ProductImage";
import ArrowIcon from "../../icons/Arrow";

import imagesHandlerUtil from "../../utils/carrouselImagesHandler"

import firstImage from "../../images/image-product-1.jpg";
import secondImage from "../../images/image-product-2.jpg";
import thirdImage from "../../images/image-product-3.jpg";
import fourthImage from "../../images/image-product-4.jpg";

const IMAGES = [firstImage, secondImage, thirdImage, fourthImage]

function Container() {
  const [ image, setImage ] = useState(IMAGES[0])

  function onChangeImage(kind) {
    const currentIndex = IMAGES.indexOf(image)
    const newImageIndex = imagesHandlerUtil(IMAGES.length, currentIndex, kind)

    setImage(IMAGES[newImageIndex])
  }

  return (
    <div className="relative">
      <ArrowIcon
        css="absolute left-0 top-[50%] bg-white rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => onChangeImage("previous")}
        kind="previous"
      />
      <ProductImage src={image} />
      <ArrowIcon
        css="absolute right-0 top-[50%] bg-white rounded rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => onChangeImage("next")}
      />
    </div>
  );
}

export default Container;
