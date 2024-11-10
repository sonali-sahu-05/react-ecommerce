import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

const Edit = () => {
  const id = useParams();
  const [product, setproduct] = useState(null);
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // for the accessing of the id
  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  // to avoid page refreshment
  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert("Please fill in all fields with at least 5 characters.");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      description,
      price,
      category,
    };

    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  };

  return (
    <>
      <form
        onSubmit={AddProductHandler}
        className="p-[5%] items-center flex flex-col w-screen h-screen"
      >
        <h1 className="text-1xl mb-3 w-1/2 font-semibold">Add New Product</h1>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="url"
          placeholder="Image link"
          className="text-1xl mb-3 bg-zinc-100 rounded p-3 w-1/2"
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
          className="text-1xl mb-3 bg-zinc-100 rounded p-3 w-1/2"
        />
        <div className="w-1/2 flex justify-between">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Price"
            className="text-1xl w-[48%] mb-3 bg-zinc-100 rounded p-3"
          />
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            placeholder="Category"
            className="text-1xl w-[48%] mb-3 bg-zinc-100 rounded p-3"
          />
        </div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter product description here"
          className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          rows="10"
        ></textarea>
        <div className="w-1/2">
          <button className="py-2 px-5 border rounded border-blue-400">
            Edit Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;
