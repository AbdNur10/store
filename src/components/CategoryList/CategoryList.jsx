import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './CategoryList.css'
import UseAllCategories from '../../hooks/UseAllCategories'
const CategoryList = () => {
  const {categories}=UseAllCategories()
  console.log(categories)
  return (
    <div className='category-list'>
      {
        categories.map((category)=>{
          return <CategoryCard key={category} category={category}/>
        })
      }
    </div>
  )
}

export default CategoryList