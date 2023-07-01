import  './sidebar.scss';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomIcon from '@material-ui/icons/Room';
//import DriveEtaIcon from '@material-ui/icons/DriveEta';
import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputIcon from '@material-ui/icons/Input';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useNavigate,Link} from "react-router-dom";
import img from './amigo.png';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoardRounded';
import Diversity3Icon from '@mui/icons-material/Diversity3Rounded';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAltRounded';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CodeIcon from '@mui/icons-material/Code';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import './amigo.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BlockIcon from '@mui/icons-material/Block';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WarningIcon from '@mui/icons-material/Warning';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CommuteIcon from '@mui/icons-material/Commute';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const Sidebar = () => {
 const navigate = useNavigate();
  
  return (
    <div className='sidebar'>
      
    <div className="top" >
      <Link to="/home">
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
      <AccordionSummary>
           <li>
           <Link to='/home' style={{textDecoration:"none"}}>
            <DashboardIcon className='icon'/>
              <span> Dashboard</span>
            </Link> 
           </li>
           </AccordionSummary>

     
     <Accordion   className='Accordion' style={{ backgroundColor: 'transparent',border: 'none'  }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <li>
            <AnalyticsIcon className='icon'/>
            <span>Analytics</span>
            </li>
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>
          <Link to ='/destination' style={{textDecoration:"none"}}>
              <EqualizerIcon className='icon'/> 
              <span> Frequent destinations</span>
              </Link>
           </li>
          
          <li>
          <Link to ='/cost' style={{textDecoration:"none"}}>
            <BubbleChartIcon className='icon'/>
            <span> Variation in theoretical and real prices</span>
            </Link>
           </li>
          <li> 
            <Link to ='/comminuty' style={{textDecoration:"none"}}>
            <Diversity3Icon className='icon' />
            <span>Target customer community </span>
            </Link>
          </li> 
          <li> 
          <Link to ='/taxi' style={{textDecoration:"none"}}>
           
            <DepartureBoardIcon className='icon' />
            <span>Taxi availability  </span>
            </Link>
          </li>  
          <li> 
            <SignalCellularAltIcon className='icon' />
            <span>Number of cancellations  </span>
          </li>     

          </Typography>
        </AccordionDetails>
      </Accordion>
      
     


       
          
          <Accordion className='Accordion' style={{ backgroundColor: 'transparent' }}>
           
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
        className='style'
       
       >
          <Typography >
          <li>
             <RoomIcon className='icon'/>
                <span> Map view   </span>
           </li>
          </Typography>
        </AccordionSummary>
      
        <AccordionDetails>
          <Typography >
          <li>
          <Link to ='/maps' style={{textDecoration:"none"}}>
             <RoomIcon className='icon'/>
                <span> Map view  </span>
                </Link>
           </li>
           <li>
           <Link to ='/mapactifs' style={{textDecoration:"none"}}>
             <RoomIcon className='icon'/>
                <span> View of the driver card</span>
                </Link>
           </li>
           <li>
           <Link to ='/mapinactifs' style={{textDecoration:"none"}}>
             <RoomIcon className='icon'/>
                <span> View of the driver card inactifs</span>
                </Link>
           </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
           
          
          
         
         <Accordion className='Accordion' style={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <li> <GroupIcon className='icon'/>
            <i> <span> Drivers </span></i>
            </li>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <li>
            <Link to='/drivers' style={{textDecoration:"none"}}>
            <ThumbUpAltIcon className='icon'  />
            <i> <span> Online drivers </span></i>
            </Link>
             </li>
              <li> 
              <Link to='/products' style={{textDecoration:"none"}}>
             <CheckIcon className='icon'  />
            <i> <span> Approved drivers </span></i>
            </Link>
             </li>
             <li> 
            <WarningIcon className='icon' />
            <i> <span> Unapproved drivers </span></i>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>


      
      
      <Accordion className='Accordion' style={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
        >
          <Typography>
          <li>
             <PeopleAltIcon className='icon'/>
                <span> Clients   </span>
           </li>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>
          <Link to='/clients' style={{textDecoration:"none"}}>
             <PersonIcon className='icon'/>
                <span> Clients </span>
            </Link>  
           </li>
           <li>
           <Link to='/clientblock' style={{textDecoration:"none"}}>
             <BlockIcon className='icon'/>
                <span> Bloked clients   </span>
             </Link>   
           </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion className='Accordion' style={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <li> <AddBusinessIcon className='icon'/>
            <i> <span> Earnings </span></i>
            </li>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
              <li> 
              <Link to='/earnings' style={{textDecoration:"none"}}>
             <PaidIcon className='icon' />
            <i> <span>  drivers payment reports </span></i>
            </Link>
             </li>
             <li> 
            <AttachMoneyIcon className='icon'  />
            <i> <span> admin payment reports </span></i>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion' style={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <li> <AddBusinessIcon className='icon'/>
            <i> <span> Review and Ratings </span></i>
            </li>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
              <li> 
              <Link to='/products' style={{textDecoration:"none"}}>
             <PaidIcon className='icon'/>
            <i> <span> Rider rating </span></i>
            </Link>
             </li>
             <li> 
            <AttachMoneyIcon className='icon'  />
            <i> <span> Driver rating</span></i>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <AccordionSummary>
        
      <Typography>
          <li>
            <Link to='/rides' style={{textDecoration:"none"}}>
             <WbIridescentIcon className='icon'/>
                <span> Rides  </span>
                </Link>
           </li>
          </Typography>
          </AccordionSummary>

          <AccordionSummary>
            <Link to='/documents' style={{textDecoration:"none"}} >
           <li>
             <FileOpenIcon className='icon'/>
             <span>Documents</span>
           </li>
           </Link>
           
           </AccordionSummary>

          <AccordionSummary
          >
             <Link to='/vehicules' style={{textDecoration:"none"}}>
           <li> 
             <CommuteIcon className='icon'/>
             <span> Vehicules</span>
           </li>
           </Link>
           </AccordionSummary>
          <AccordionSummary
          >
            <Link to='/code' style={{textDecoration:"none"}} >
           <li> 
             <CodeIcon className='icon'/>
             <span> Promo Code</span>
           </li>
           </Link>
           </AccordionSummary>
           <AccordionSummary>
            <li> 
             <CancelScheduleSendIcon className='icon'/>
             <span> Signal</span>
           </li>
           </AccordionSummary>
           <AccordionSummary>
           <li> 
             <SettingsIcon className='icon'/>
             <span> Settings</span>
           </li>
           </AccordionSummary>
         
     
           <AccordionSummary>
          <li>
          <Link to='/profile' style={{textDecoration:"none"}} >
            <AccountBoxIcon className='icon'/>
            <span> Profil</span>
            </Link>
           </li>
           </AccordionSummary>
          
          
           <AccordionSummary>
           <Link to='/' style={{textDecoration:"none"}} >
           <li> 
            <InputIcon className='icon' />
            <span> Log Out</span>
          </li>
          </Link>
          </AccordionSummary>
    </ul>
    

    </div> 
    
  
    
  </div>
  )
}

export default Sidebar