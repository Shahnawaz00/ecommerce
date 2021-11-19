import React from 'react'
import productsData from '../ProductsData'
import {Link } from 'react-router-dom';


const Products = ({categoryChosen, productHandler}) => {

    const newData = productsData.filter((product) =>  {return product.category === categoryChosen} )
    return (
        <div className='products' >
        {categoryChosen === '' ? 
                    
                    productsData.map((product,index) => {
                return <Link className='links' onClick={() => productHandler(product.id)} to='product'>
                <div onClick={() => productHandler(product.id)} className='product' key={product.id} >
                    <img alt={product.title} src={product.image} />
                    <h5> {product.title} </h5>
                    <p>AED {product.price} </p>
                    <p>Rating - {product.rating.rate} , {product.rating.count} reviews </p>
                </div>
                </Link>
            })
            :
                          
              newData.map((product,index) => {
                return <Link className='links' onClick={() => productHandler(product.id)} to='product'> <div  className='product' key={product.id} >
                    <img alt={product.title} src={product.image} />
                    <h5> {product.title} </h5>
                    <p>AED {product.price} </p>
                    <p>Rating - {product.rating.rate} , {product.rating.count} reviews </p>
                </div>
                </Link>

            })
              
              
              
              
            
             
        
        
        }
            
        </div>
    )
}

export default Products
