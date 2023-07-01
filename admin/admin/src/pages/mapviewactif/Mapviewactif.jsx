import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
//import Datatable from "../../components/datatable/Datatable"
import Mapactifs from "../../components/mapactifs/Mapactifs";
import './mapviewactif.scss'
const Mapviewactif = () => {
  return (
   <div className="listactif">
    <Sidebar/>
    <div className="listactifContainer">
      <Navbar/>
     
      <Mapactifs />
    
      
   </div>
   
  </div>
  )
}

export default Mapviewactif