import React from 'react';
import './ProductList.css';
const ProductList = () => {
    return (
        <div className='company-product'>
            <p className='segments'>C.R.I fluid system products cate to diverse segments.</p>
             <ul className='product-items'>
                 <li>Chemical&amp;Process</li>
                 <li>Power</li>
                 <li>Water&amp;Waste Water</li>
                 <li>Oils&amp;Gas</li>
                 <li>Pharma</li>
                 <li>Sugars&amp;Distilleries</li>
                 <li>Paper&amp;Pulp</li>
                 <li>Marine&amp;defence</li>
                 <li>Metal&amp;mining</li>
                 <li>Food&amp;beverage</li>
             </ul>
             <ul className='extra-items'>
             <li>Petrochemical&amp;Refineries</li>
                 <li>Solar</li>
                 <li>Building</li>
                 <li>Hvac</li>
                 <li>Fire Fighting</li>
             </ul>
             <li>Agriculture&amp;Residential.</li>
        </div>
    );
};

export default ProductList;

//<p className='company-services-1'>   Agriculture &amp; Residential.</p>