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
      <AccordionSummary>
           <li>
           <Link to='/' style={{textDecoration:"none"}}>
            <DashboardIcon className='icon'/>
              <span> Dashboard</span>
            </Link> 
           </li>
           </AccordionSummary>

     
     <Accordion  >
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
              <EqualizerIcon className='icon'/> 
              <span> Frequent destinations</span>
           </li>
          <li>
            <BubbleChartIcon className='icon'/>
            <span> Variation in theoretical and real prices</span>
           </li>
          <li> 
            <Diversity3Icon className='icon' />
            <span>Target customer community </span>
          </li> 
          <li> 
            <DepartureBoardIcon className='icon' />
            <span>Taxi availability  </span>
          </li>  
          <li> 
            <SignalCellularAltIcon className='icon' />
            <span>Number of cancellations  </span>
          </li>     

          </Typography>
        </AccordionDetails>
      </Accordion>
      
     


       
          
          <Accordion>
           
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
             <RoomIcon className='icon'/>
                <span> View of the driver card</span>
           </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
           
          
          
         
         <Accordion>
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
            <ThumbUpAltIcon className='icon' sx ={onclick=>{navigate("/users")}} />
            <i> <span> Online drivers </span></i>
            </Link>
             </li>
              <li> 
              <Link to='/products' style={{textDecoration:"none"}}>
             <CheckIcon className='icon' sx ={onclick=>{navigate("/users")}} />
            <i> <span> Approved drivers </span></i>
            </Link>
             </li>
             <li> 
            <WarningIcon className='icon' sx ={onclick=>{navigate("/users")}} />
            <i> <span> Unapproved drivers </span></i>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>


      
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
        >
          <Typography>
          <li>
             <PeopleAltIcon className='icon'/>
                <span> Users   </span>
           </li>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>
          <Link to='/users' style={{textDecoration:"none"}}>
             <PersonIcon className='icon'/>
                <span> Users </span>
            </Link>  
           </li>
           <li>
           <Link to='/users' style={{textDecoration:"none"}}>
             <BlockIcon className='icon'/>
                <span> Bloked users   </span>
             </Link>   
           </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion>
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
              <Link to='/products' style={{textDecoration:"none"}}>
             <PaidIcon className='icon' sx ={onclick=>{navigate("/users")}} />
            <i> <span>  drivers payment reports </span></i>
            </Link>
             </li>
             <li> 
            <AttachMoneyIcon className='icon' sx ={onclick=>{navigate("/users")}} />
            <i> <span> admin payment reports </span></i>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
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
             <PaidIcon className='icon' sx ={onclick=>{navigate("/users")}} />
            <i> <span> Rider rating </span></i>
            </Link>
             </li>
             <li> 
            <AttachMoneyIcon className='icon' sx ={onclick=>{navigate("/users")}} />
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
           <li> 
             <CommuteIcon className='icon'/>
             <span> Vehicules</span>
           </li>
           
           </AccordionSummary>
          <AccordionSummary
          >
           <li> 
             <CodeIcon className='icon'/>
             <span> Promo Code</span>
           </li>
           
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
            <AccountBoxIcon className='icon'/>
            <span> Profil</span>
           </li>
           </AccordionSummary>
           <AccordionSummary>
          <li> 
            <InputIcon className='icon' />
            <span> Log Out</span>
          </li>
          </AccordionSummary>
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