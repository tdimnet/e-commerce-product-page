function util(numberOfImages, currentImage, action) {
  let newIndex = currentImage;

  if (action === "next") {
    if (currentImage + 1 === numberOfImages) {
      newIndex = 0;
    } else {
      newIndex++;
    }
  } else if (action === "previous") {
    if (currentImage - 1 === -1) {
      newIndex = numberOfImages - 1;
    } else {
      newIndex--;
    }
  }

  return newIndex;
}

export default util;
