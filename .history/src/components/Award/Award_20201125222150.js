import React from 'react';
import award from '../../images/award.png';
import logo from '../../images/logo.png';
import awardReceiving from '../../images/receive-award.png';

import './Award.css';
const Award = () => {
    return (
        <section className='container'>
             <div className='award-image-section'>
                   <img src={award} alt='C.R.I' className='award-image'/>
             </div>
             
              <div>
                 <h1>Hello</h1>
              </div>
        </section>
    );
};

export default Award;

// {/*<img className='award' src={award} alt=""/>*/}