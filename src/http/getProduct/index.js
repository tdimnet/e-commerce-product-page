async function getProduct() {
  try {
    const response = await fetch("/data/product.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export default getProduct;
