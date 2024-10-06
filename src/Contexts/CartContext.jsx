import React, { createContext, useContext, useEffect, useState } from "react";  

const CartContext = createContext();  

export const CartProvider = ({ children }) => {  
  const [cartItems, setCartItems] = useState(  
    JSON.parse(localStorage.getItem("cartItems")) || []  
  );  

  console.log(cartItems); // Debugging line to view current cart items  

  const addToCart = (product) => {  
    const existItems = cartItems.find((x) => x.id === product.id);  
    product.quantity = product.quantity || 1;  

    if (existItems) {  
      const updatedCart = cartItems.map((item) =>  
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item  
      );  
      setCartItems(updatedCart);  
    } else {  
      setCartItems([...cartItems, { ...product, quantity: 1 }]);  
    }  
  };  

  const removeQuantity = (product) => {  
    const existItems = cartItems.find((x) => x.id === product.id);  
    if (existItems) {  
      if (existItems.quantity > 1) {  
        // Decrease the quantity  
        const updatedCart = cartItems.map((item) =>   
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item  
        );  
        setCartItems(updatedCart);  
      } else {  
        // If the quantity is 1, remove the item from the cart  
        removeFromCart(product);  
      }  
    }  
  };  

  const removeFromCart = (product) => {  
    setCartItems(cartItems.filter((x) => x.id !== product.id));  
  };  

  useEffect(() => {  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));  
  }, [cartItems]);  

  return (  
    <CartContext.Provider value={{ cartItems, addToCart, removeQuantity, removeFromCart }}>  
      {children}  
    </CartContext.Provider>  
  );  
};  

export const useCart = () => useContext(CartContext);