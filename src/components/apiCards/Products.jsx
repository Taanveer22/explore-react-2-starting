import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-12">
      {products.map((element, index) => (
        <SingleProduct data={element} index={index}></SingleProduct>
      ))}
    </div>
  );
};

export default Products;
