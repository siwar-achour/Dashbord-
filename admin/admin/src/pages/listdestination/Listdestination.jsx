import React from "./listdestination.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Chartdestination from "../../components/chartdestination/Chartdestination"
//import Linetaxi from "../../components/linetaxi/Linetaxi"

//import Maps from "../../components/maps/Maps";
const Listdestination = () => {
  return (
    <div className="listtaxi">
      <Sidebar/>
    
       <div className="listcomminutyContainer">
       <Navbar />
       <form action="">
       <h1 className='static1'>Statistics of Frequent Destinatins</h1>
   
         <div className="type" style={{ display: 'flex' }}>
           <div >
             <Chartdestination style={{ marginBottom: '0px' }} />
           </div>
           <div className="com">
            
           </div>
         </div>
       </form>  
      </div>
      </div>
  )
}

export default Listdestination




