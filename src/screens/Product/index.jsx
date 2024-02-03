import BrandName from "../../components/BrandName";
import Discount from "../../components/Discount";
import Navigation from "../../components/Navigation";
import ProductDescription from "../../components/ProductDescription";
import ProductName from "../../components/ProductName";
import ProductPrice from "../../components/ProductPrice";

import AddToCartContainer from "../../containers/AddToCart";
import ProductImageContainer from "../../containers/ProductImage"

function Screen() {
  return (
    <div>
      <div className="p-6">
        <Navigation />
      </div>
      <main className="md:grid md:grid-cols-2 md:max-w-6xl md:mx-auto">
        <ProductImageContainer />
        <section className="p-6 grid gap-4">
          <BrandName name="sneaker company" />
          <ProductName name="fall limited edition sneakers" />
          <ProductDescription content="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer." />
          <div className="grid grid-cols-4 items-center">
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
