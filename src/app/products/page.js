"use client";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          cache: "no-store",
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return searchQuery
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
  });

  return (
    <div className="max-w-6xl mx-auto py-16 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 lg:justify-between justify-center  w-full items-center mb-12 p-4">
        <div className="lg:w-6/12  w-full text-center">
          <h1 className="text-[32px] font-[700]">All Products</h1>
          <p className="text-[18px] font-[500] text-[#969696]">
            Order now and appreciate the enjoying our products
          </p>
        </div>
        <div className="lg:w-3/12 w-full">
          <input
            className="p-4 rounded-lg border w-full"
            type="search"
            name=""
            id=""
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* 4 columns */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5 p-2 lg:p-0">
        {/* column-1 */}
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
