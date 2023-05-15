import React from "./listearning.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import DatatableEarning from "../../components/datatableEarning/DatatableEarning"
//import Maps from "../../components/maps/Maps";
const Listearning = () => {
  return (
    <div className="listearning">
      <Sidebar/>
      <div className="listearningContainer">
        <Navbar/>
        <DatatableEarning/>
      
      </div>
    </div>
        
  )
}

export default Listearning




