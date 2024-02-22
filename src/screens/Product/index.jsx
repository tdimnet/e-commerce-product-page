import { useEffect, useState } from "react";

import BrandName from "../../components/BrandName";
import Discount from "../../components/Discount";
import Navigation from "../../components/Navigation";
import ProductDescription from "../../components/ProductDescription";
import ProductName from "../../components/ProductName";
import ProductPrice from "../../components/ProductPrice";
import getProduct from "../../http/getProduct";

import AddToCartContainer from "../../containers/AddToCart";
import ProductImageContainer from "../../containers/ProductImage";

function Screen() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await getProduct();
        setProduct(productData);
      } catch (error) {
        console.error("An error occurred while fetching the product:", error);
      }
    }

    fetchData();
  }, []);

  console.log("====");
  console.log(product);
  console.log("====");

  return (
    <div className="pb-4 md:pb-12">
      <div className="p-6 md:mb-16">
        <Navigation />
      </div>
      {product && (
        <main className="md:mx-auto md:flex md:justify-center">
          <div className="md:mr-32 md:w-[445px]">
            <ProductImageContainer />
          </div>
          <section className="p-4 md:flex md:w-[445px] md:flex-col md:justify-center">
            <BrandName name={product.brand} css="mb-4 md:mb-8" />
            <ProductName name={product.product} css="mb-4 md:mb-8" />
            <ProductDescription
              css="mb-4 md:mb-8"
              content={product.description}
            />
            <div className="relative mb-4 flex items-baseline md:mb-8 md:h-16">
              <ProductPrice hasDiscount={false} price="$125.00" css="mr-4" />
              <Discount discountValue={"50%"} />
              <ProductPrice
                hasDiscount={true}
                price="$250.00"
                css="ml-auto md:absolute md:bottom-0 md:left-0"
              />
            </div>
            <AddToCartContainer />
          </section>
        </main>
      )}
    </div>
  );
}

export default Screen;
