import React from "react";  
import { TbPlus } from "react-icons/tb";  
import './ProductCard.css';  
import { useCart } from "../../Contexts/CArtContext";
 // Ensure the path to CartContext is correct  

const ProductCard = ({ product }) => {  
  const { addToCart } = useCart();  

  const handleAddToCart = () => {  
    addToCart(product);
     // Call addToCart with the product directly  
  };  

  return (  
    <div className="card-container">  
      <div className="card-image">  
        <img src={product.image} alt={product.title} /> {/* Use product.title for better accessibility */}  
      </div>  

      <div className="card-details">  
        <h4 className="card-title">{product.title}</h4>  
        <div className="card-category">{product.category}</div>  

        <div className="card-flex">  
          <div className="card-price">{product.price}$</div>  
          <div className="card-button" onClick={handleAddToCart}>  
            <TbPlus />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ProductCard;