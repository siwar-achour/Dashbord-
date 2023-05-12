import React from "./listdriver.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatabledriver from "../../components/datatabledriver/Datatabledriver";
//import Maps from "../../components/maps/Maps";
const Listdriver = () => {
  return (
    <div className="listdriver">
      <Sidebar/>
      <div className="listdriverContainer">
        <Navbar/>
        <Datatabledriver/>
      
      </div>
    </div>
        
  )
}

export default Listdriver




