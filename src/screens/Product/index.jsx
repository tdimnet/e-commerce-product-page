import AddToCardBtn from "../../components/Button"
import BrandName from "../../components/BrandName";
import Counter from "../../components/Counter"
import Discount from "../../components/Discount";
import Navigation from "../../components/Navigation";
import ProductDescription from "../../components/ProductDescription";
import ProductImage from "../../components/ProductImage";
import ProductName from "../../components/ProductName";
import ProductPrice from "../../components/ProductPrice"

import BasketIcon from "../../icons/Basket"


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
          <div className="grid grid-cols-4 items-center mt-3">
            <ProductPrice hasDiscount={false} price="$125"  />
            <Discount discountValue={"50%"}  />
            <ProductPrice hasDiscount={true} price="$250" css="col-span-2 text-right" />
          </div>
          <Counter />
          <AddToCardBtn content="Add to cart" icon={BasketIcon}  />
        </section>
      </main>
    </div>
  );
}

export default Screen;
