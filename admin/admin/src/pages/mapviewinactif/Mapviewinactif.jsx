import React from './mapviewinactif.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
//import Datatable from "../../components/datatable/Datatable"
import Mapinactifs from "../../components/mapinactifs/Mapinactifs";

const Mapviewinactif = () => {
  return (
   <div className="listinactif">
    <Sidebar/>
    <div className="listinactifContainer">
      <Navbar/>
     
      <Mapinactifs />
    
      
   </div>
   
  </div>
  )
}

export default Mapviewinactif