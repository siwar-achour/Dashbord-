import React from './newride.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom";
import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUpload';
const Newride = ({inputs,title}) => {
  const [file , setFile] =useState("");
  console.log(file)
  return (
    <div className='newride'>
      <Sidebar/>
      <div className="newrideContainer">
        <Navbar/>
        <div className="dataTablerideTitle">
   
       <Link to="/rides" 
        style={{textDecoration:"none"}}
        className='link'>
        Back
       </Link>
  </div>
      <div className="top">
          <h1>{title}</h1>
      </div>
      <div className="bottom">
     
      <div className="right">
     
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
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input type={input.type} placeholder={input.placeholder} />
          </div>
          ))}

         <button> Send</button>
   
      </div>

      </div>
      </div>

    </div>
  )
}

export default Newride