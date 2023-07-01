import React from './profile.scss'
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar  from '../../components/navbar/Navbar';
import img1 from './profil.jpg';
import './profil.jpg';
import  img from './backAbout.jpg';
const Profile = () => {
  return (
    <div className='profile'>
    <Sidebar/>
     <div className='profileContainer'  style={{ 
      backgroundImage: `url(${img})`,backgroundsize: 'cover'  
    }}>
       <Navbar/>
        <div className="top">
          <div className="left-admin">
            <div className="editButton">Edit</div>
           <h1 className="title">Information</h1>
           <div className="item-admin">
            <img src={img1}
             alt=""
              className="itemImg" />
              <div className="details">
                 <h1 className="itemTitle">Siwar Achour</h1>
                <div className="detailItem">
                <span className="itemkey">Email:</span>
                <span className="detailValue">siwarachour999@gmail.com</span>
                </div> 
                <div className="detailItem">
                <span className="itemkey">Phone:</span>
                <span className="detailValue">+216 26 986 405</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Adress:</span>
                <span className="detailValue">Avenue Habib bourguiba</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Country:</span>
                <span className="detailValue">Sokra</span>
                </div>
              </div>
           </div>
           
          </div>
         
        </div>
       

     </div>

    </div>
  )
}

export default Profile