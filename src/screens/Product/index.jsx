import Navigation from "../../components/Navigation";
import ProductImage from "../../components/ProductImage";

function Screen() {
  return (
    <div>
      <Navigation />
      <main className="px-0">
        <div className="w-full">
          <ProductImage
            alt="Sneaker"
            src="../../images/image-product-1.jpg"
          />
        </div>
      </main>
    </div>
  );
}

export default Screen;
