import React from "./listtaxi.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Charttaxi from "../../components/charttaxi/Charttaxi"
import Linetaxi from "../../components/linetaxi/Linetaxi"

//import Maps from "../../components/maps/Maps";
const Listtaxi = () => {
  return (
    <div className="listtaxi">
      <Sidebar/>
    
       <div className="listcomminutyContainer">
       <Navbar />
       <form action="">
       <h1 className='static1'>Statistics of Taxi availability</h1>
   
         <div className="type" style={{ display: 'flex' }}>
           <div >
             <Charttaxi style={{ marginBottom: '0px' }} />
           </div>
           <div className="com">
             <Linetaxi />
           </div>
         </div>
       </form>  
      </div>
      </div>
  )
}

export default Listtaxi




