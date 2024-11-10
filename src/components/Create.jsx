import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import {nanoid} from  "nanoid"
import {  json, useNavigate } from "react-router-dom";



const Create = () => {
  const navigate=useNavigate()
  const[products,setProducts]=useContext(ProductContext)
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");



// to avoid the page refreshment
  const AddProductHandler=(e)=>{
e.preventDefault()

if(title.trim().length<5 || image.trim().length<5|| category.trim().length<5||price.trim().length<5|| description.trim().length<5){
  alert("pls fill the field with atleast 5 charater")
  return
}

const product={
  id:nanoid(),
  title,
  image,
  description,
  price,
  category

}
setProducts([...products,product])
localStorage.setItem("products",JSON.stringify(products))
navigate("/")




  }
  return (
    <>
      <form onSubmit={AddProductHandler}       className="p-[5%] items-center   flex flex-col w-screen h-screen">
        <h1 className="text-1xl mb-3 w-1/2 font-semibold "> Add New Product</h1>
        <input
          onChange={(e) => setimage(e.target.value)}
          value={image}
          type="url"
          placeholder="image link"
          className="text-1xl  mb-3 bg-zinc-100 rounded   p-3 w-1/2"
        />
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
          className="text-1xl  mb-3 bg-zinc-100 rounded   p-3 w-1/2"
        />

        <div className="w-1/2 flex justify-between">
          <input
            onChange={(e) => setprice(e.target.value)}
            value={price}
            type="number"
            placeholder="price.."
            className="text-1xl w-[48%]  mb-3 bg-zinc-100 rounded   p-3 w-1/2"
          />
          <input
            onChange={(e) => setcategory(e.target.value)}
            value={category}
            type="text"
            placeholder="category"
            className="text-1xl w-[48%]  mb-3 bg-zinc-100 rounded   p-3 w-1/2"
          />
        </div>

        <textarea
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          placeholder="enter product description here"
          className="text-1xl bg-zinc-100 rounded p-3 w-1/2   mb-3"
          name=" "
          id=""
          rows="10"
        ></textarea>

        <div className="w-1/2">
          <button className="py-2 px-5 border rounded border-blue-400">
            {" "}
            Add New Product{" "}
          </button>
        </div>
      </form>
    </>
  );
};

// #endregion

export default Create;
