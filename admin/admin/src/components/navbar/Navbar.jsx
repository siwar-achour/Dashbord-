import './navbar.scss'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListIcon from '@material-ui/icons/List';
import ChatIcon from '@material-ui/icons/Chat';

import img from  "./profil.jpg";

import './profil.jpg';

const Navbar = () => {
  
  return (
    <div className='navbar'>
    <div className='wrapper'>
      
       <div className="search">
        <input type="text" placeholder='Search ...' />
        <SearchIcon className='icon'/>
       </div>
       <div className='items'>
        <div className='item'>
          <LanguageIcon className='icon'/>
          English 
        </div>
        <div className='item'>
          <Brightness4Icon className='icon'/>
     
        </div>
     
        
     
        <div className='item'>
          <FullscreenExitIcon className='icon'/>
         
        </div>
        <div className='item'>
          <ListIcon className='icon'/>
         
        </div>
        <div className='item'>
          <NotificationsIcon className='icon'/>
          <div className="counter">1</div>
        </div>
        <div className='item'>
          <ChatIcon className='icon'/>
          <div className="counter">2 </div>
         
        </div>
        <div className='item'>
        <amigo/>

          <img  src={img}
           alt=""
           className='avatar'
          />
         
        </div>
        
        
        
       </div>

    </div>
    </div>
  )
}

export default Navbar