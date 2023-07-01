import React from "./listprice.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Chartprice from "../../components/chartprice/Chartprice"
import Chartprice2 from "../../components/chartprice2/Chartprice2"
import Charttheorical from "../../components/charttheorical/Charttheorical"
import Charttheorical1 from "../../components/charttheorical/Charttheorical1"
import Chartresult from "../../components/charttheorical/Chartresult"
import Lineresult from "../../components/charttheorical/Lineresult"

//import Maps from "../../components/maps/Maps";
const Listprice = () => {
  return (
    <div className="listprice">

      <Sidebar />

      <div className="listcomminutyContainer">
        <Navbar />

        <h1 className='static1'>Statistics of Theoritical and real price</h1>
       
        <div className="type" style={{ display: 'flex' ,marginLeft:'40px', marginRight:'0px', marginTop:'40px'}}>
          <div className="price">
            <div >
              <Chartprice />
            </div>
            <div className="com">
              <Chartprice2 />
            </div>
          </div>

        </div>


        <div className="type" style={{ display: 'flex',marginLeft:'40px' }}>
          <div className="price">
            <div >
              <Charttheorical style={{ marginLeft: '0px' }} />
            </div>
            <div className="com">
              <Charttheorical1 />
            </div>
          </div>
        </div>
        
        <div className="type" style={{ display: 'flex',marginLeft:'40px' }}>
          <div className="price">
            <div >
              <Chartresult style={{ marginLeft: '0px' }} />
            </div>
            <div className="com">
              <Lineresult />
            </div>
          </div>
        </div>
       
      
   <div>
 
   </div>
      </div>
     
    </div>
  )
}

export default Listprice




