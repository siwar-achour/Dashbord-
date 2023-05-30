import React from "./listblocked.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatableblocked from "../../components/datatableblocked/Datatableblocked";
//import Maps from "../../components/maps/Maps";
const Listblocked = () => {
  return (
    <div className="listblocked">
      <Sidebar/>
      <div className="listblockedContainer">
        <Navbar/>
        <Datatableblocked/>
      
      </div>
    </div>
        
  )
}

export default Listblocked




