// import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  console.log(id);

  // no need of this now because we use our own data  this is the axios or the backend data

  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getsingleproduct();
  // }, []);

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setProducts(product);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    navigate("/");
  };

  return product ? (
    <>
      <div className="w-[70%] flex  justify-between h-full  m-auto p-[10%]">
        <img className="w-[40%] h-[80%] " src={`${product.image}`} alt="" />
        <div className="content w-[40%] m-6 p-2">
          <h1 className="text-4xl">{product.title}</h1>
          <h2 className="">{product.category}</h2>
          <h2 className="text-red-600"> {product.price}</h2>
          <p className="mb-5">{product.description}</p>
          <button
            onClick={() => ProductDeleteHandler(product.id)}
            className=" mt-3 py-2 px-5 border mr-5 text-blue-300   font-semibold rounded border-blue-500"
          >
            DELETE
          </button>
          <Link
            to={`/edit/${product.id}`}
            className="py-2 px-5 border text-red-300 rounded border-red-500"
          >
            EDIT
          </Link>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Details;
