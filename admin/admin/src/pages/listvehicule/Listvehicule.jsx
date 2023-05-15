import React from "./listvehicule.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatablevehicule from "../../components/datatablevehicule/Datatablevehicule"
//import Maps from "../../components/maps/Maps";
const Listvehicule = () => {
  return (
    <div className="listvehicule">
      <Sidebar/>
      <div className="listvehiculeContainer">
        <Navbar/>
        <Datatablevehicule/>
      
      </div>
    </div>
        
  )
}

export default Listvehicule




