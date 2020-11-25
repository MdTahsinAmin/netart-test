import React from 'react';
import award from '../../images/award.png';
import logo from '../../images/logo.png';
import './Award.css';
const Award = () => {
    return (
        <section className='container'>
             <div>
                 <img className='award' src={award} alt=""/>
             </div>
        </section>
    );
};

export default Award;