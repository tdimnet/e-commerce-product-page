import Navigation from "../../components/Navigation";
import ProductImage from "../../components/ProductImage"
import BrandName from "../../components/BrandName"
import ProductName from "../../components/ProductName"

import image from "../../images/image-product-1.jpg"

function Screen() {
  return (
    <div>
      <div className="p-6">
        <Navigation />
      </div>
      <main>
        <ProductImage
          src={image}
          alt="A sneaker"
        />
        <section>
          <BrandName name="sneaker company" />
          <ProductName name="fall limited edition sneakers"  />
        </section>
      </main>
    </div>
  );
}

export default Screen;
