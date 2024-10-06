import React from 'react'
import ProductList from '../components/ProductList/ProductList'
import CategoryList from '../components/CategoryList/CategoryList'
import { ProductProvider } from '../Contexts/ProductContext'

const Home = () => {
  return (
   <ProductProvider>
     <div className='main-container'>
        <div className="products">
            <h1 className='section-title'>Products</h1>
            <ProductList/>
        </div>
        <div className="categories">
            <h1 className='section-title'>Categories</h1>
            <CategoryList/>
        </div>
    </div>
   </ProductProvider>
  )
}

export default Home