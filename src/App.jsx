// import './App.css'

import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const { search, pathname } = useLocation();
  console.log(search, pathname);

  return (
    <>
      <div className="w-screen h-screen  flex">
        {pathname != "/" ||
          (search.length > 0 && (
            <Link
              className="absolute text-2xl font-semibold text-red-300 left-[17%] top-[3%]"
              to="/"
            >
              {" "}
              HOME
            </Link>
          ))}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/" element={<Create />}></Route> */}
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
