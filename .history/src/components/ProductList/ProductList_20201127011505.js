import React from 'react';
import './ProductList.css';
const ProductList = () => {
    return (
        <div className='company-product'>
            <p className='segments'>C.R.I fluid system products cate to diverse segments.</p>
             <ul className='product-items'>
                 <li>Chemical &amp; Process <span>|</span></li>
                 <li>Power <span>|</span></li>
                 <li>Water &amp; Waste Water <span>|</span></li>
                 <li> Oils &amp; Gas <span>|</span></li>
                 <li>Pharma <span>|</span></li>
                 <li>Sugars &amp; Distilleries <span>|</span></li>
                 <li>Paper &amp; Pulp <span>|</span></li>
                 <li>Marine &amp; defence <span>|</span></li>
                 <li>Metal &amp; mining <span>|</span></li>
                 <li>Food &amp; beverage <span>|</span></li>
                 <li>Petrochemical &amp; Refineries <span>|</span></li>
                 <li>Solar <span>|</span></li>
                 <li>Building <span>|</span></li>
                 <li>Hvac <span>|</span></li>
                 <li>Fire Fighting <span>|</span></li>
                 <li>Agriculture &amp; Residential.</li>
             </ul>
        </div>
    );
};

export default ProductList;

//<p className='company-services-1'>   Agriculture &amp; Residential.</p>