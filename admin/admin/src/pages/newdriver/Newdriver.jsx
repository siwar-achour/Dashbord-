import React from './newdriver.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import './R.png';
import img1 from './R.png';
import { useState } from 'react';
import {Link} from "react-router-dom";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUpload';
const Newdriver = ({inputs,title}) => {
  const [file , setFile] =useState("");
  console.log(file)
  return (
    <div className='newdriver'>
      <Sidebar/>
      <div className="newdriverContainer">
        <Navbar/>
        
      <div className="top">
          <h1>{title}</h1>
         <div className='back'>
          <Link to="/drivers" 
        style={{textDecoration:"none"}}
        className='link'>
        Back
       </Link>
       </div>
      </div>
      <div className="bottom">
      <div className="left">
        <img src={img1}
        
         alt="" />
      </div>
      <div className="right">
        <form >
          <div className="formInput">
            <label htmlFor='File' >
              Image:
              <DriveFolderUploadOutlinedIcon className='icon'/>
            </label>
            <input type='File' id="file" 
            onChange={e=>setFile(e.target.files[0])} 
            style={{display:'none'}} />
          </div>
       {inputs.map((input) => (
          <div className="formInput" key={input.idv}>
            <label>{input.label}</label>
            <input type={input.type} placeholder={input.placeholder} />
          </div>
          ))}

        <Link to="/documents" 
        style={{textDecoration:"none"}}
        className='link'>
         <button> Next</button>
         </Link>
        </form>
      </div>

      </div>
      </div>

    </div>
  )
}

export default Newdriver