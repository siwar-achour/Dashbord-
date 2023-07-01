import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './datatablepromocode.scss'

const Datatablepromocode = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const Columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => <span>{params.id}</span>,
    },
    {
      field: 'Code_Name',
      headerName: 'Code Name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'type',
      headerName: 'Type Name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
      {
      field: 'value',
      headerName: 'Value',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
      {
      field: 'Usage_limit',
      headerName: 'Usage_limit',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
      {
      field: 'User_used',
      headerName: ' User_used',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
      {
      field: 'date',
      headerName: 'Date',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
     {
      field: 'status',
      headerName: 'Status',
      width: 230,
      renderCell: (params) => <span
      className={params.value ? 'active' : 'blocked'}
    >
      {params.value ? 'Active' : 'Blocked'}
    </span>,
    },
  ];
    useEffect(() => {
      const fetchPromoData = async () => {
        try {
          const response = await axios.get('/promos'); // Replace '/api/promos' with the actual API endpoint for fetching promo data
          const promoData = response.data;
          const promosWithId = promoData.map((promo, index) => ({ ...promo, id: index + 1 }));
          setRecords(promosWithId);
          setFilterRecords(promosWithId);
          console.log(response.data) ;
        
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchPromoData();
    }, []);
  
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
  
  function handleFilter(event) {
    const newData = filterRecords.filter(row => {
      return (
        row.Code_Name.toLowerCase().includes(event.target.value.toLowerCase())
        // Add other filter conditions for the promo data here
      );
    });
    setRecords(newData);
  }

  return (
    <div className='datatablepromocode' style={{ height: '90%', width: '95%' }}>
      <div className="dataTablepromocodeTitle">
        Add New Ride
        <Link to="newride" style={{ textDecoration: "none" }} className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={records}
        columns={Columns.concat(actionColumn)}
        getRowId={(row) => row.id}
        pageSize={14}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Datatablepromocode;
