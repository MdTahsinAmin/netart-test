import React from 'react';
import './Footer.css';
import {IoIosCall} from "react-icons/io";
import {AiFillFacebook} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';
const Footer = () => {
    return (
      <div className='footer'>
            <div>
                <IoIosCall/> <span>Toll free 1800-200-1234</span>
            </div>
            <div>
                <AiFillFacebook/> <a href='#' target='_blank'>www.facebook.com/cripumps</a>
            </div>
            <div>
                <BiWorld/><a href='#' target='_blank'>www.crigroup.com</a>
            </div>
      </div>
    );
};

export default Footer;