import Navigation from "../../components/Navigation";
import ProductImage from "../../components/ProductImage";
import BrandName from "../../components/BrandName";
import ProductName from "../../components/ProductName";
import ProductDescription from "../../components/ProductDescription";

import image from "../../images/image-product-1.jpg";

function Screen() {
  return (
    <div>
      <div className="p-6">
        <Navigation />
      </div>
      <main>
        <ProductImage src={image} alt="A sneaker" />
        <section className="p-6">
          <BrandName name="sneaker company" css="mb-4" />
          <ProductName name="fall limited edition sneakers" css="mb-4" />
          <ProductDescription content="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer." />
        </section>
      </main>
    </div>
  );
}

export default Screen;
