import { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);

  // console.log(search);

  // console.log(products);

  // useLoaction provided by the react router dom which provides the query string

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(category);

    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined")
      // getproductscategory()

      // it is used to fetch the data from our sides
      setfilteredProducts(products.filter((p) => p.category == category));
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%] h-screen p-10 pt-[5%]  flex flex-wrap overflow-x-hidden overflow-y-auto ">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              to={`/details/${p.id}`}
              key={i}
              className=" card mr-3 mb-3  flex-col    flex justify-center items-center hover:shadow-xl     w-[18%] h-[30vh]   rounded shadow border
"
            >
              <div
                className="w-full h-[80%] bg-no-repeat mb-3  bg-center bg-contain hover:scale-110"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="m-2 font-semibold   hover:text-blue-400 ">
                {p.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
