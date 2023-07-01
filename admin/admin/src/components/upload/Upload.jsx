import {useState} from 'react'
import React from './upload.scss';
//import FileUpload from  "../../components/fileUpload/FileUpload";
import FileUpload from '../fileUpload/FileUpload';
import FileList from "../fileList/FileList";

function Upload(){
    const[files,setFiles]= useState([
   //   {
    //    name:'myFile.pdf'
    // },
   //  {
  //    name:'myFile2.pdf'
  // },
   //{
   //   name:'myFile3.pdf'
  // }
   
   
   ])
const removeFile=(filename)=>{
   setFiles(files.filter(file => file.name !== filename))
}
console.log(files)
     return(
        <div classname="upload">
         <div className='titleu'>
         <p className='p1'>  Upload File </p>
         </div>
        
       <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
       <FileList files={files} removeFile={removeFile}/>
        
    </div>
     )
}
export default Upload;