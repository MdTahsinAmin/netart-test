import React from 'react';
import './ProductList.css';
const ProductList = () => {

    const style ={
          textTransform:'uppercase',
          fontSize:'15px',
          fontWeight:'bold',
          textAlign:'center'
    };
    return (
        <div className='company-product'>
            <p style={style}>C.R.I fluid system products cate to diverse segments</p>
            <p>Chemical &amp; Process | Power | Water &amp; Waste Water | Oils &amp; Gas | Pharma | Sugars &amp; Distilleries | Paper &amp; Pulp | Marine &amp; defence | Metal &amp; mining | Food &amp; beverage | Petrochemical &amp; Refineries | Solar | Building | Hvac | Fire Fighting | Agriculture &amp; Residential</p>
        </div>
    );
};

export default ProductList;
