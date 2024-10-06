import React from 'react'
import { TbMinus, TbPlus, TbX } from 'react-icons/tb'
import { useCart } from '../../Contexts/CArtContext'

const Items = ({item}) => {

    const { removeFromCart,addToCart,removeQuantity } = useCart();

    const handleRemoveFromCart = () => {
        removeFromCart(item);
    }

    const handleAddToCart = () => {
        addToCart(item);
    }   

    const handleDecrease=()=>{
        removeQuantity(item);
    }

  return (
    <div className='items-details'>
        <div className="items-info">
            <div className="items-image">
                <img src={item.image} alt="huh" />
            </div>
            <div className="items-title">
                {item.title}
            </div>
            <div className="items-unit-price">
                ${item.price}
            </div>
            <div className="items-quantity">
                <TbMinus onClick={handleDecrease} />  {item.quantity}  <TbPlus onClick={handleAddToCart}/>
            </div>
            <div className="items-total-price">
                {item.price * item.quantity}
            </div>
            <div className="items-remove"
             onClick={handleRemoveFromCart}
             handleAddToCart={handleAddToCart}
             >
                <TbX/>
            </div>
        </div>
    </div>
  )
}

export default Items