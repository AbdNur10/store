import React from "react";
import "./CategoryCard.css";
import { Link, NavLink } from "react-router-dom";
const CategoryCard = ({ category }) => {
  // Debugging line
  return (
    <NavLink to={`/category/${category}`}>
       <div className="category-card">
        <h4 className="category-name">{category}</h4>
      </div>
    </NavLink>
     
    
  );
};

export default CategoryCard;
