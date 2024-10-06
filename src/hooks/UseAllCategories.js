import React, { useEffect, useState } from "react";

const UseAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return {categories};
 
};

export default UseAllCategories;
