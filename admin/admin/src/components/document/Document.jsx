import React from './document.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom";
//import NewVehicule from "../pages/newvehicule/Newvehicule";
//import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUpload';
import Upload from "../../components/upload/Upload";
const document = () => {
    
  return (
   <div className="document">
    <Sidebar/>
    <div className="documentContainer">
      <div>
     <Navbar/>
      <div className='upload'>
      <Upload/>
      </div>
      </div>
      <Link to ='/vehicules/newvehicule'>
      <div className='next'>
      <i><button >  Next</button> </i>
      </div>   
      </Link>  
   </div>
     
  </div>
  )
}

export default document