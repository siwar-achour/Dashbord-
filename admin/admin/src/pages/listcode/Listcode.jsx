import React from "./listcode.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatablepromocode from "../../components/datatablepromocode/Datatablepromocode"
//import Maps from "../../components/maps/Maps";
const Listcode = () => {
  return (
    <div className="listcode">
      <Sidebar/>
      <div className="listcodeContainer">
        <Navbar/>
        <Datatablepromocode/>
      
      </div>
    </div>
        
  )
}

export default Listcode




