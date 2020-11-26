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
            <p style={style}><strong>C.R.I fluid system products cate to diverse segments.</strong></p>
            <p className='company-services'>Chemical &amp; Process <span>|</span> Power <span>|</span> Water &amp; Waste Water <span>|</span> Oils &amp; Gas <span>|</span> Pharma <span>|</span> Sugars &amp; Distilleries <span>|</span> Paper &amp; Pulp <span>|</span> Marine &amp; defence <span>|</span> Metal &amp; mining <span>|</span> Food &amp; beverage <span>|</span></p>
            <p className='company-services-1'>Petrochemical &amp; Refineries <span>|</span> Solar <span>|</span> Building <span>|</span> Hvac <span>|</span> Fire Fighting <span>|</span> Agriculture &amp; Residential.</p>
        </div>
    );
};

export default ProductList;
