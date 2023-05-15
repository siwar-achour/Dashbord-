import React from './singlevehicule.scss'
import Chart from '../../components/chart/Chart';
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar  from '../../components/navbar/Navbar';
import Listvehicule from '../../components/datatablevehicule/Datatablevehicule';
import img1 from './photo.jpg';
import './photo.jpg';
const Singlevehicule = () => {
  return (
    <div className='singlevehicule'>
    <Sidebar/>
     <div className='singlevehiculeContainer'>
       <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
           <h1 className="title">Information</h1>
           <div className="item">
            <img src={img1}
             alt=""
              className="itemImg" />
              <div className="details">
                 <h1 className="itemTitle">Polo</h1>
                <div className="detailItem">
               
                </div> 
                <div className="detailItem">
                <span className="itemkey">Categorie</span>
                <span className="detailValue">Polo</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Matricule</span>
                <span className="detailValue">120 Tunis 1960</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Cost Per mKM</span>
                <span className="detailValue">6$</span>
                </div>
               
              </div>
           </div>
           
          </div>
          <div className="right">
           <Chart aspect={4 / 1} title= "Vehicule Spending last 5 Months"/> 
          
          </div>
        
        </div>
        <div className="bottom">
        <h1 className="title">Last transactions</h1>
        <Listvehicule/>
          </div>

     </div>

    </div>
  )
}

export default Singlevehicule