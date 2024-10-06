import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Details from "./pages/Details";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
