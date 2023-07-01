import React from 'react';
import './pop.scss';
import img from './h.jpg'
import { Link } from 'react-router-dom';
const Pop = ({ onClose, message }) => {
  return (
    <div className='popup-overlay' >
      <div className='popup-content' style={{ 
        backgroundImage: `url(${img})`,backgroundsize: 'cover'  
      }}>
        <h3 style={{color:'#ff6900',fontSize:'25px',marginTop:'15px'}}>Well done !</h3>

        <p style={{color:'#029FA0',fontSize:'25px',marginTop:'15px'}}> Add client and successful</p>
        <Link to='/clients'>
        <button className=''
        style={{
          backgroundColor: '#ff6900',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }} onClick={onClose}>Close</button>
         </Link>
      </div>
    </div>
  );
};

export default Pop;