import { useState } from "react";

import ProductImage from "../../components/ProductImage";
import ArrowIcon from "../../icons/Arrow";

import imagesHandlerUtil from "../../utils/carrouselImagesHandler";

function Container({ images }) {
  const [image, setImage] = useState(images[0]);

  function onChangeImage(kind) {
    const currentIndex = images.indexOf(image);
    const newImageIndex = imagesHandlerUtil(images.length, currentIndex, kind);

    setImage(images[newImageIndex]);
  }

  return (
    <div className="">
      <div className="relative md:mb-8">
        <ArrowIcon
          css="absolute left-0 top-[50%] bg-white rounded-full h-10 w-10 flex items-center justify-center md:hidden"
          onClick={() => onChangeImage("previous")}
          kind="previous"
        />
        <ProductImage src={`/images/${image}`} />
        <ArrowIcon
          css="absolute right-0 top-[50%] bg-white rounded rounded-full h-10 w-10 flex items-center justify-center md:hidden"
          onClick={() => onChangeImage("next")}
        />
      </div>
      <div className="hidden gap-8 md:grid md:grid-cols-4">
        {images.map((image, index) => (
          <ProductImage
            key={image}
            src={`/images/${image}`}
            css="rounded cursor-pointer hover:opacity-80"
            onClick={() => setImage(images[index])}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
