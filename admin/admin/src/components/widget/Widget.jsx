import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import CommuteIcon from '@material-ui/icons/Commute';
import CodeIcon from '@material-ui/icons/Code';
import axios from 'axios';
import './widget.scss';
import { Link} from 'react-router-dom';
const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let amount = 0;
        let diff = 1;

        switch (type) {
            case 'user':
                const clientsResponse = await axios.get('/clients');
                const clients = clientsResponse.data;
                amount = clients.length;
                // Calculate the percentage of active drivers compared to blocked drivers
                const activeClients = clients.filter((client) => client.status === 'active');
                const blockedClients = clients.filter((client) => client.status === 'blocked');
                diff = blockedClients.length > 0 ? Math.round((activeClients.length / blockedClients.length) * 100) : 0;
                break;
              
              
                case 'order':
                    const driversResponse = await axios.get('/drivers');
                    const drivers = driversResponse.data;
                    amount = drivers.length;
                    // Calculate the percentage of active drivers compared to blocked drivers
                    const activeDrivers = drivers.filter((driver) => driver.status === 'active');
                    const blockedDrivers = drivers.filter((driver) => driver.status === 'blocked');
                    diff = blockedDrivers.length > 0 ? Math.round((activeDrivers.length / blockedDrivers.length) * 100) : 0;
                    break;

          case 'earning':
            const vehiculesResponse = await axios.get('/vehicules');
            const vehicules = vehiculesResponse.data;
            amount = vehicules.length;
            // Calculate the percentage of active vehicles compared to blocked vehicles
            const activeVehicules = vehicules.filter((vehicule) => vehicule.status === 'active');
            const blockedVehicules = vehicules.filter((vehicule) => vehicule.status === 'blocked');
            diff = Math.round((activeVehicules.length / blockedVehicules.length) * 100);
            break;

           
          case 'balance':
            const promoCodesResponse = await axios.get('/promos');
            const promoCodes = promoCodesResponse.data;
            amount = promoCodes.length;
            // Calculate the percentage of active promo codes compared to blocked promo codes
            const activeCodes = promoCodes.filter((code) => code.status === 'active');
            const blockedCodes = promoCodes.filter((code) => code.status === 'blocked');
            diff = Math.round((activeCodes.length / blockedCodes.length) * 100);
            break;

          default:
            break;
        }

        setAmount(amount);
        setDiff(diff);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [type]);

  let data = {};

  switch (type) {
    case 'user':
      data = {
        title: 'Clients',
        isMoney: false,
        link: 'See all Clients',
        
        icon: (
            <Link to='/clients' style={{textDecoration:"none"}}>
            <PersonIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
           </Link>
        ),
       
      };
      break;

    case 'order':
      data = {
        title: 'Drivers',
        isMoney: false,
        link: 'See all Drivers',
        icon: (
            <Link to='/drivers' style={{textDecoration:"none"}}>
          <GroupIcon
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
            }}
          />
          </Link>
        ),
      };
      break;

    case 'earning':
      data = {
        title: 'Vehicules',
        isMoney: false,
        link: 'View all Vehicules',
        icon: (
            <Link to='/vehicules' style={{textDecoration:"none"}}>
          <CommuteIcon
            className='icon'
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}
          />
          </Link>
        ),
      };
      break;

    case 'balance':
      data = {
        title: 'Promo Codes',
        isMoney: false,
        link: 'See details',
        icon: (
            <Link to='/code' style={{textDecoration:"none"}}>
          <CodeIcon
            className='icon'
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
            }}
          />
          </Link>
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && '$'}{amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <ExpandLessIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
