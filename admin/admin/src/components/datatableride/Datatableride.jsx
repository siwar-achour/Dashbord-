import React from './datatableride.scss'
import { DataGrid } from '@material-ui/data-grid';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

const Datatableride = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [pickAddress, setPickAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const Columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => <span>{params.id}</span>,


    },

    {
      field: 'name',
      headerName: ' Name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'theoretical_price',
      headerName: 'Theorical_price',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      width: 130,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 230,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 230,
        renderCell: (params) => <span>{params.value}</span>
    },
    
// ...

{
  field: 'pickAddress',
  headerName: 'Pick Address',
  width: 230,
  renderCell: async (params) => {
    if (params.value && params.value.latitude && params.value.longitude) {
      const address = await reverseGeocode(params.value.latitude, params.value.longitude);
      return <span>{address}</span>;
    }
    return null; // Return null if latitude or longitude is undefined
  },
},
{
  field: 'dropAddress',
  headerName: 'Drop Address',
  width: 230,
  renderCell: async (params) => {
    if (params.value && params.value.latitude && params.value.longitude) {
      const address = await reverseGeocode(params.value.latitude, params.value.longitude);
      return <span>{address}</span>;
    }
    return 'null'; // Return null if latitude or longitude is undefined
  },
},

// ...

{
  field: 'pickAddress',
  headerName: 'Pick Address',
  width: 230,
  valueFormatter: (params) => {
    // Custom logic to format the value
    return params.value;
  },
  renderCell: (params) => <span>{pickAddress}</span>,
},
{
  field: 'dropAddress',
  headerName: 'Drop Address',
  width: 230,
  valueFormatter: (params) => {
    // Custom logic to format the value
    return params.value;
  },
  renderCell: (params) => <span>{dropAddress}</span>,
},

    
  ];

  useEffect(() => {
    const getRides = async () => {
      try {
        const response = await axios.get('/rides');
        const ridesData = response.data;
        console.log(ridesData); // Add this console log
        const ridesWithId = ridesData.map((ride, index) => ({ ...ride, id: index + 1 }));
        console.log(ridesWithId); // Add this console log
        
        setRecords(ridesWithId);
        setFilterRecords(ridesWithId);
      } catch (error) {
        console.log(error);
      }
    };
  
    getRides();
  }, []);
  
 
  async function reverseGeocode(latitude, longitude) {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrbnVxZmowaHN5M2VzMW1udmp2c2VlIn0`
      );
      const address = response.data.features[0].place_name;
      return address;
    } catch (error) {
      console.log(error);
      return ''; // Return an empty string if there's an error
    }
  };
  function handleFilter(event) {
    const newData = filterRecords.filter(row => {
      return (row.name.toLowerCase().includes(event.target.value.toLowerCase()) || row.pickAdress.toLowerCase().includes(event.target.value.toLowerCase())
        || row.dropAddress.toLowerCase().includes(event.target.value.toLowerCase()))
    });
    setRecords(newData)
  }


  const actionColumn =[
    { 
      field : "action",
      headerName:"Action",
      width:250,
     renderCell:()=>{
       return(
         <div className='cellAction'>
            <ul>
                <i>
           <Link to='test' style={{textDecoration:"none"}}>
           <button onClick={()=>navigate('/ride')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="viewButton"style={ {height: '60%'}} >    View</div>
           </button>
           </Link>
           </i>
           <i>
           <button onClick={()=>navigate('new')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="updateButton"style={ {height: '60%'}} > update</div>
           </button>
           </i>
           <i>
           <button onClick={()=>navigate('newr')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
           <div className="deleteButton"style={ {height: '60%'}}>Delete</div>
           </button>
           </i>
           </ul>
         </div>
       );
     },
  
   },
  ];
 
  return (
    <div className='datatableride' style={ {height: '90%', width: '95%'}}>
  <div className="dataTablerideTitle">
    Add New Ride
    <Link to="newride" 
    style={{textDecoration:"none"}}
    className='link'>
    Add New 
    </Link>
  </div>
  <DataGrid
        rows={records}
        columns={Columns.concat(actionColumn)}
        getRowId={(row) => row.id}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
     
    </div>
  )
}

export default Datatableride