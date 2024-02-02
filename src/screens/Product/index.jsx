import BrandName from "../../components/BrandName";
import Discount from "../../components/Discount";
import Navigation from "../../components/Navigation";
import ProductDescription from "../../components/ProductDescription";
import ProductImage from "../../components/ProductImage";
import ProductName from "../../components/ProductName";
import ProductPrice from "../../components/ProductPrice";

import AddToCartContainer from "../../containers/AddToCart";

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
          <div className="mt-3 grid grid-cols-4 items-center">
            <ProductPrice hasDiscount={false} price="$125" />
            <Discount discountValue={"50%"} />
            <ProductPrice
              hasDiscount={true}
              price="$250"
              css="col-span-2 text-right"
            />
          </div>
          <AddToCartContainer />
        </section>
      </main>
    </div>
  );
}

export default Screen;
