import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex p-4 ">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-600 absolute left-[18%] top-[3%]">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
