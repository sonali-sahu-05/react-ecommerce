import axios from "./axios";
import { createContext, useEffect, useState } from "react";

// Create the context
export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // Function to fetch products
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);

      // Store the fetched products in localStorage
      localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products when component mounts
  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, [products]);

  // Return the context provider
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
