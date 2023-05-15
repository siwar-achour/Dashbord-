import React from 'react'
import axios from "axios"
import FileItem from '../fileItem/FileItem';
const FileList=({files,removeFile})=> {
    const deleteFileHandler=(_name)=>{
        axios.delete(`http://localhost:3010/upload?name=${_name}`)
        .then((res)=>removeFile(_name))
        .catch((err)=>console.error(err))
    }
  return (
    <div>
        <ul className='file-list'>
            {
                files &&
                files.map(f=><FileItem
                   key={f.name}
                   file={f}
                   deleteFile={deleteFileHandler}
                />)
            }
        </ul>
    </div>
  )
}

export default FileList