import React from 'react';
import './Product.css';
import products from '../../images/product-list.png';
const Product = () => {
    return (
    <>
     <p className='product-description'>Installed over 10 lakhs star rated pumpsets across the country resulting in a cumulative saving of more then 900 million units of power for the nation.</p>
    <div className='product-container'>
          <div className='product-list-img'>
             <img src={products} alt="Products" className='product-list-img'/>
             <p className='image-product-list'>Values - Pumps - Pipes - IoT Drivers &amp; controllers - Wires &amp; Cables - Solar Systems-Motors</p>
          </div>
    </div>
    </>
    );
};

export default Product;

// 
//  