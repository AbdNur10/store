import React from "react";
import "./Header.css";
import { TbSearch, TbShoppingBagSearch, TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/CArtContext";
const Header = () => {
  const {cartItems}=useCart();  
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <h2>E-store</h2>
          <TbShoppingBagSearch className="icon" />
        </div>
      </Link>

      <div className="right-side">
        <div className="search">
          <input type="text" placeholder="Search here" />
          <TbSearch />
        </div>
       <Link to="/cart">
       <div className="cart">
          <TbShoppingCart className="cart-icon" />
          <span>{cartItems.length}</span>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default Header;
