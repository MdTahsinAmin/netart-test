import React from 'react';
import './Product.css';
import products from '../../images/product-list.png';
const Product = () => {
    return (
    <div className='product-container'>
          <div className='product-list-img'>
             <img src={products} alt="Products" className='product-list-img'/>
             <p>Values - Pumps - Pipes - IoT Drivers &amp; controllers - Wires &amp; Cables - Solar Systems-Motors</p>
          </div>
    </div>
    );
};

export default Product;
