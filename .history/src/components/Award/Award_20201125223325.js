import React from 'react';
import award from '../../images/award.png';
import logo from '../../images/logo.png';
import awardReceiving from '../../images/receive-award.png';

import './Award.css';
const Award = () => {
    return (
        <section className='container'>
             <div className='award-image-section'>
                  { /*<img src={award} alt='C.R.I' className='award-image'/>*/}
             </div>
              <div className='company-description-section'>
                 <img src={logo} alt='C.R.I logo' className='company-logo'/>
                 <p>C.R.I pumps win the national energy conservation award 2018 for the 4th time</p>
              </div>
        </section>
    );
};

export default Award;

// {/*<img className='award' src={award} alt=""/>*/}