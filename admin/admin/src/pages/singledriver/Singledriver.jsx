import React from './singledriver.scss'
import Chart from '../../components/chart/Chart';
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar  from '../../components/navbar/Navbar';
import {Link} from  "react-router-dom";
import img1 from './photo.jpg';
import './photo.jpg';
const Single = () => {
  return (
    <div className='singledriver'>
    <Sidebar/>
     <div className='singledriverContainer'>
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
                 <h1 className="itemTitle">Mahmoud hemdani</h1>
                <div className="detailItem">
                <span className="itemkey">Email:</span>
                <span className="detailValue">siwarachour999@gmail.com</span>
                </div> 
                <div className="detailItem">
                <span className="itemkey">Phone:</span>
                <span className="detailValue">+216 26 986 405</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Documents</span>
                <Link to='/'>
                <button> Read</button>
                </Link>
                </div>
                <div className="detailItem">
                <span className="itemkey">Id_vehicule</span>
                <span className="detailValue">2</span>
                </div>
              </div>
           </div>
           
          </div>
          <div className="right">
           <Chart aspect={4 / 1} title= "User Spending last Months"/> 
          
          </div>
        
        </div>
       
        

     </div>

    </div>
  )
}

export default Single