import React from 'react';
import award from '../../images/award.png';
import logo from '../../images/logo.png';
import awardReceiving from '../../images/receive-award.png';

import './Award.css';
const Award = () => {
    return (
        <section className='container'>
             <div className='award-image-section'>
                  { <img src={award} alt='C.R.I' className='award-image'/>}
             </div>
              <div className='company-description-section'>
                 <img src={logo} alt='C.R.I logo' className='company-logo'/>
                 <p className='wining-description'>C.R.I. pumps wins the national energy conservation award 2018 for the 4th time.</p>
                 <ul>
                     <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions as trustworthy products for various projects across the globe to save energy.</li>
                     <li>C.R.I. is the highest contributor in the country for the products of EESL(Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control Panel.</li>
                 </ul>
                 <div className='image-section'>
                       <img src={awardReceiving} alt='' className='awardReceiving-img'/>
                 </div>
                 <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr.G.Selvaraj ,Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan Speaker of Lok Sabha &amp; Shri Raj Kumar Singh Honorable Minister of State.</p>
              </div>
              
        </section>
    );
};

export default Award;

// {/*<img className='award' src={award} alt=""/>*/}