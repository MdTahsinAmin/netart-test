import React from 'react';
import './Product.css';
import products from '../../images/product-list.png';
const Product = () => {
    return (
    <div className='section'>
     <p className='product-description'>Installed over 10 lakhs star rated pumpsets across the country resulting in a cumulative saving of more then 900 million units of power for the nation.</p>
     <div className='product-container'>
          <div className='product-list-img'>
             <img src={products} alt="Products" className='product-list-img'/>
              <ul className='image-product-list'>
                  <li>Values</li>
                  <li>Pumps</li>
                  <li>Pipes</li>
                  <li>IoT Drivers &amp; controllers</li>
                  <li>Wires &amp; Cables</li>
                  <li>Solar Systems</li>
                  <li>Motors</li>
              </ul>
          </div>
     </div>
    </div>
    );
};

export default Product;

// <p className='image-product-list'> -Solar Systems-Motors</p>