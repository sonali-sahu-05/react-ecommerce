import { useContext } from "react";

import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";
const Nav = () => {
  const [products] = useContext(ProductContext);

  // now we have to find the different and the unique category if the data

  let distict_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distict_category = [...new Set(distict_category)];
  console.log(distict_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
  ${(Math.random() * 255).toFixed()},
  ${(Math.random() * 255).toFixed()},0.4 )`;
  };
  console.log(color);

  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-100 flex  flex-col items-center pt-5">
        <a className="py-2 px-5 border rounded border-blue-400" href="/create">
          {" "}
          Add New Product{" "}
        </a>

        <hr className=" my-3 w-[80%]" />
        <h1 className="text-xl  font-semibold mb-3 w-[80%]">
          {" "}
          Category Filter
        </h1>
        <div className="w-[80%]">
          {distict_category.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="flex items-center mb-3"
            >
              <span
                style={{ backgroundColor: color() }}
                className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-300"
              >
                {" "}
              </span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
