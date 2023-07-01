import React from 'react';
import './popup.scss';
import img from './h.jpg'
import { Link } from 'react-router-dom';
const Popup = ({ onClose, message }) => {
  return (
    <div className='popup-overlay' >
      <div className='popup-content' style={{ 
        backgroundImage: `url(${img})`,backgroundsize: 'cover'  
      }}>
        <h3 style={{color:'#ff6900',fontSize:'25px'}}>Well done</h3>
        <p style={{color:'#029FA0',fontSize:'25px'}}> Successful update</p>
        <Link to='/clients'>
        <button className='close-button' onClick={onClose}>Close</button>
         </Link>
      </div>
    </div>
  );
};

export default Popup;