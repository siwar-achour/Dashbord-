import React from 'react';
import './datatableclientblocked.scss';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Datatableclientblocked = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);

  const Columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => <span>{params.id}</span>,


    },

    {
      field: 'firstname',
      headerName: 'First Name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'lastname',
      headerName: 'Last name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 130,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 230,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 230,
      renderCell: (params) => (
        <span className={params.value ? 'active' : 'blocked'}>
          {params.value ? 'Active' : 'Blocked'}
        </span>
      ),
    },
  ];
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/clients');
        setClients(response.data);
        setFilteredClients(response.data.filter((client) => !client.status));
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
  }, []);

  const handleFilter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredData = clients.filter(
      (client) =>
        client.firstName.toLowerCase().includes(inputValue) ||
        client.lastName.toLowerCase().includes(inputValue) ||
        client.email.toLowerCase().includes(inputValue)
    );
    setFilteredClients(filteredData);
  };





  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <ul>
              <i>
                <Link to='test' style={{ textDecoration: "none" }}>
                  <button style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                    <div className="viewButton" style={{ height: '60%' }} > View</div>
                  </button>
                </Link>
              </i>
              <i>
                <button style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                  <div className="updateButton" style={{ height: '60%' }} > update</div>
                </button>
              </i>
              <i>
                <button   style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                  <div className="deleteButton" style={{ height: '60%' }}>Delete</div>
                </button>
              </i>
            </ul>

          </div>
        );
      },

    },
  ];


  return (


    <div className='datatable' >
       <div className="dataTableTitle">
    Add New Client
    <div className='espace'>
      <th> <Link to="newdriver" 
    style={{textDecoration:"none"}}
    className='link'>
    Add New 
    </Link></th>
      <th>
      <Link to="/home" 
    style={{textDecoration:"none"}}
    className='link'>
     Back
    </Link>
      </th>
    </div>
  </div>
      <div>
        <input type='text' onChange={handleFilter} placeholder='Search' ></input>
      </div>
      <DataGrid className='datagrid'
        columns={Columns.concat(actionColumn)}
        rows={filteredClients}
        getRowId={(row) => row.id}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick

      />

    </div>




  )
}









export default Datatableclientblocked;
