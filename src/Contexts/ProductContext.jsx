import React, { createContext, useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";  

const ProduceContext = createContext();  

export const ProductProvider = ({ children }) => {  
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(false);  
    const { category } = useParams(); // Destructure category from useParams()  
    console.log(products)
    const getProduct = async (category) => {  
        try {  
            setLoading(true);  
            let url = 'https://fakestoreapi.com/products';  
            if (category) {  
                url += `?category=${category}&limit=4`; // Use & instead of ?  
            } else {  
                url += `?limit=4`;  
            }  
            const res = await fetch(url);  
            if (res.ok) {  
                const data = await res.json(); // Await the res.json()  
                setProducts(data);  
            }  
        } catch (error) {  
            console.error(error);  
        } finally {  
            setLoading(false);  
        }  
    };  

    useEffect(() => {  
        getProduct(category);  
    }, [category]);  

    return (  
        <ProduceContext.Provider value={{ products, loading }}>  
            {children} {/* Return children to allow wrapping other components */}  
        </ProduceContext.Provider>  
    );  
};  

export const useProduct = () => useContext(ProduceContext);