import React from 'react';
import './Footer.css';
import {IoIosCall} from "react-icons/io";
import {AiFillFacebook} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';
const Footer = () => {
    return (
      <div className='footer'>
            <ul className="footer-section">
                <li>
                  <span><IoIosCall/></span>
                   <span>Toll free 1800-200-1234</span>
                </li>
                <li>
                  <span><AiFillFacebook/></span>
                   <span>www.facebook.com/cripumps</span>
                </li>
                <li>
                  <span><BiWorld/></span>
                   <span>www.crigroup.com</span>
                </li>
            </ul>
      </div>
    );
};

export default Footer;

/*
<div>
                <span className='media-icon'><IoIosCall/></span> <span>Toll free 1800-200-1234</span>
            </div>
            <div>
                <span className='media-icon'> <AiFillFacebook/> </span> <a href='#' target='_blank'>www.facebook.com/cripumps</a>
            </div>
            <div>
            <span className='media-icon'><BiWorld/></span>  <a href='#' target='_blank'>www.crigroup.com</a>
            </div>
*/