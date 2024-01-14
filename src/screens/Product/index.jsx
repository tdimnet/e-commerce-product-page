import Navigation from "../../components/Navigation";
import ProductImage from "../../components/ProductImage"

import image from "../../images/image-product-1.jpg"

function Screen() {
  return (
    <div>
      <Navigation />
      <main>
        <ProductImage
          src={image}
          alt="A sneaker"
        />
      </main>
    </div>
  );
}

export default Screen;
