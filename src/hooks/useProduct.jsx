const useProduct = async () => {
  const res = fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return [products];
};

export default useProduct;
