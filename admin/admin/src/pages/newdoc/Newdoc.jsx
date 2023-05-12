import React from './newdoc.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import { useState } from 'react';
//import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUpload';
const Newdoc = ({inputs,title}) => {
  const [file , setFile] =useState("");
  console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
      <div className="top">
          <h1>{title}</h1>
      </div>
      <div className="bottom">
      <div className="left">
       
      </div>
      <div className="right">
        <form >
          <div className="formInput">
            
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

export default Newdoc