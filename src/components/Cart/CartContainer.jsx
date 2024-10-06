import React from 'react'
import './CartContainer.css'
import Items from './Items'
import Summary from '../Summary/Summary'
import { useCart } from '../../Contexts/CArtContext'

const CartContainer = () => {
  const {cartItems}=useCart();
  return (
    <div className='cart-wrapper'>
        <h2 className='section-title'>Shopping Cart</h2>
        <div className="cart-container">
          {
            cartItems && cartItems.length >0 ? (
              <div className="cart-items">
               {
                cartItems.map((item)=>(
                     <Items key={item.id} item={item}/>
                 ) )
               }
            </div>
            ):(
              <div className="no-items">
                <p>No items in the cart </p>
              </div>
            )
          }
            
            <div className="summary">
                <Summary cartItems={cartItems}/>
            </div>
        </div>
    </div>
  )
}

export default CartContainer