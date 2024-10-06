import React from 'react'

const Summary = ({cartItems}) => {

    const totalAmount=cartItems.reduce((acc,item)=>{
        return acc+item.price*item.quantity
    },0)

    const taxAmount=totalAmount*0.02;

    const totalQuantity=cartItems.reduce((acc,item)=>{
        return acc+item.quantity
    },0)

    const finalAmmount=totalAmount+taxAmount;
  return (
    <div className='card-summary'>
        <h3 className="summary-title">Summary</h3>
        <div className="summary-total">
        <span className="summary-subTotal">Subtotal*</span>$ {totalAmount.toFixed(2)}
        </div>
        <div className="summary-total-tax">
            <span>Tax Charges(2%)</span>$ {taxAmount.toFixed(2)}
        </div>
        <div className="summary-total-quantity">
            <span>Total Quantity *</span> {totalQuantity}
        </div>
        <div className="summary-total-amount">
            <span>Total Amount</span> ${finalAmmount.toFixed(2)}
        </div>
        <div className="summary-check-out-button">
            Procced
        </div>
    </div>
  )
}

export default Summary