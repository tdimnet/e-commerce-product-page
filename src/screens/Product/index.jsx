import BrandName from "../../components/BrandName";
import Discount from "../../components/Discount";
import Navigation from "../../components/Navigation";
import ProductDescription from "../../components/ProductDescription";
import ProductName from "../../components/ProductName";
import ProductPrice from "../../components/ProductPrice";

import AddToCartContainer from "../../containers/AddToCart";
import ProductImageContainer from "../../containers/ProductImage";

// className="h-[300px] md:h-[445px] md:w-[445px]"

function Screen() {
  return (
    <div className="pb-4 md:pb-12">
      <div className="p-6 md:mb-16">
        <Navigation />
      </div>
      <main className="md:mx-auto md:grid md:max-w-6xl md:grid-cols-2">
        <ProductImageContainer />
        <section className="p-4 md:flex md:justify-center md:flex-col">
          <BrandName name="sneaker company" css="mb-4 md:mb-8" />
          <ProductName name="fall limited edition sneakers" css="mb-4" />
          <ProductDescription css="mb-4" content="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer." />
          <div className="grid grid-cols-4 items-center mb-4">
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
