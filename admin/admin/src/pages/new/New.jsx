import React from './new.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import './R.png';
import img1 from './R.png';
import { useState,Link } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUpload';
const New = ({inputs,title}) => {
  const [file , setFile] =useState("");
  console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
      <div className="top">
      <Link to="/home" 
    style={{textDecoration:"none"}}
    className='link'>
     Back
    </Link>
          <h1>{title}</h1>
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
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input type={input.type} placeholder={input.placeholder} />
          </div>
          ))}

         <button> Send</button>
        </form>
      </div>

      </div>
      </div>

    </div>
  )
}

export default New