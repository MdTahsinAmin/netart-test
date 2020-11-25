import React from 'react';
import './Product.css';
import products from '../../images/product-list.png';
const Product = () => {
    return (
        <section className='container'>
            <p>Installed over 10 lakhs star rated pumpsets across the country resulting in a cumulative saving of more then 900 million units of power for the nation.</p>
            <div className='product-list-image'>
              <img src={products} alt="Products" className='product-list'/>
            </div>
        </section>
    );
};

export default Product;