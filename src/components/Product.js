import React from 'react';
import productsData from '../ProductsData';
import {BiArrowBack} from 'react-icons/bi'

const Product = ({productChosen, cartHandler}) => {
    const newProduct = productsData.filter((product) => {return product.id === productChosen});
    const goBack = () => {
        window.history.back();
    }
    return (
        <div >
        <div className='back-div' >
         <BiArrowBack className='links' onClick={goBack} size={32} /> Go Back
         </div>

            {newProduct.map((product) => {
                return <div className='product-page' >
                    <img alt={product.title} src={product.image} />
                    <div className='product-details'>                    
                    <h5 className='product-title'> {product.title} </h5>
                    <h6 className='product-category' >{product.category}</h6>
                    <p className='product-desc'>{product.description} </p>
                    <p className='product-rating'>Rating - {product.rating.rate} , {product.rating.count} reviews </p>

                    <div className='cart-div' >
                    <p className='product-price'>AED {product.price} </p>
                    <button type='button' className='cart-btn' onClick={() => cartHandler(product)} >Add to Cart </button>
                    </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Product
