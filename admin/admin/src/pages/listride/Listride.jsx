import React from "./listride.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatableride from "../../components/datatableride/Datatableride";
//import Maps from "../../components/maps/Maps";
const Listride = () => {
  return (
    <div className="listride">
      <Sidebar/>
      <div className="listrideContainer">
        <Navbar/>
        <Datatableride/>
      
      </div>
    </div>
        
  )
}

export default Listride





