import  './sidebar.scss';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomIcon from '@material-ui/icons/Room';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputIcon from '@material-ui/icons/Input';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useNavigate , Link} from "react-router-dom";
import {  Button } from '@material-ui/core';
import img from './amigo.png';

import './amigo.png';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='sidebar'>
      
    <div className="top" >
      <Link to="/">
      <span className='logo' >
      <img  src={img}
           alt=""
           className='avatar'
          />
      </span>
      </Link>
    </div>
    <hr />
    <div className='center'>
      <ul>
      <p className='title'>Main</p>   
           <li>
           <Link to='/'>
              <DashboardIcon className='icon'/>
              <span> Dashboard</span>
              </Link> 
           </li>

     <p className='title'>Useful</p>
           <li>
              <EqualizerIcon className='icon'/> 
              <span> Dashboard</span>
           </li>
     <p className='title'> Lists</p>
       
          <li>
          <Button  >
            <Link to ='/maps'>
             <RoomIcon className='icon'/>
             <span>
              Map view
             <ExpandMoreIcon fontSize='small' className='MoreIcon'/> 
             </span>
             </Link>
             </Button>
             
             </li>
        

               
           <li>
            <Button>
             <DriveEtaIcon className='icon'/>
             <span> Drivers
             </span>
             <span className='right-icon ms-auto'><ExpandMoreIcon fontSize='small' className='MoreIcon'/></span>
             </Button>
            </li>
           
           <li> 
            <Button>
            <Link to='/users'>
             <GroupIcon className='icon' sx ={onclick=>{navigate("/users")}}/>
             <span> Users  
               <ExpandMoreIcon fontSize='small' className='MoreIcon'/>
             </span>
             </Link>
             </Button>
           </li>
     
           <li> 
            <Button>
             <PeopleAltIcon className='icon'/>
             <span> Les Partenaires</span>
             </Button>
           </li>
      
      <p className='title'> Service</p>
           <li> 
            <Button>
             <SettingsIcon className='icon'/>
             <span> Settings</span>
             </Button>
           </li>
     
      <p className='title'>User</p>
          <li>
            <Button>
            <AccountBoxIcon className='icon'/>
            <span> Profil</span>
            </Button> 
         </li>

          <li> 
            <InputIcon className='icon' />
            <Button>
            <span> Log Out</span>
            </Button>
         </li>

      </ul>

    </div>  
    <div className="bottom"> 
         <div className="colorOption"></div>
         <div className="colorOption"></div>
          </div>
    
  </div>
  )
}

export default Sidebar