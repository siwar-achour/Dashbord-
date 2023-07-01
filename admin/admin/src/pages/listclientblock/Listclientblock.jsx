import React from "./listclientblock.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatableclientblocked from "../../components/datatableclientblocked/Datatableclientblocked"
//import Maps from "../../components/maps/Maps";
const Listclientblock = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatableclientblocked/>
        
      
      </div>
    </div>
        
  )
}

export default Listclientblock




