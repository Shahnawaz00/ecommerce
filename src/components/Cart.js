import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Cart = ({cartArray,deleteProduct}) => {

    // cart total price 
    let total = 0
    cartArray.map((product) => {
        return total += product.price 
    });
    
    return (
        <div className='cart-page' >
            <div className='cart-products'>
             {cartArray.map((product) => {
                 return <div className='cart-product' >
                 <img src={product.image} />
                 <div className='cp-info-1' >
                 <p className='cp-title' >{product.title}</p>
                 <div className='cp-info-2'>
                     <p >Aed {product.price} </p>
                     <MdDeleteForever className='links' onClick={() => deleteProduct(product.id)} size={32} />
                 </div>
                 </div>
                 </div>
             })}
            </div>
            <div className='cart-total' >
            <div className='cart-price' >
            <p>Your Total</p>
            <p> AED {total} </p>
            
            </div>
            <button className='checkout-btn links' >Checkout</button>
            </div>
        </div>
    )
}

export default Cart
