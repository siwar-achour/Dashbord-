import React from 'react'
import './fileItem.scss'
import {faFileAlt, faSpinner, faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const FileItem = ({file,deleteFile}) => {
  return (
    <div  className='fileItem'>
    <li
    key = {file.name}>
  
      <FontAwesomeIcon icon={faFileAlt}/>
      <p> {file.name}  </p>
      <div className='actions'>
        {file.isUploading &&
        <FontAwesomeIcon 
          icon={faSpinner} className='fa-spin'
           onClick={()=>deleteFile(file.name)}/>
       }
        {!file.isUploading &&
        <FontAwesomeIcon 
          icon={faTrash} 
           onClick={()=>deleteFile(file.name)}/>
        }
     
      </div>

    </li>
    </div>
  )
}

export default FileItem