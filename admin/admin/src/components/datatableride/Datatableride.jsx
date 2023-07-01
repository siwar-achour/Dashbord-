import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './datatableride.scss';

const Datatableride = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [pickAddresses, setPickAddresses] = useState({});
  const [dropAddresses, setDropAddresses] = useState({});

  
   
  const Columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => <span>{params.id}</span>,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'theoretical_price',
      headerName: 'Theoretical Price',
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
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'pickAddress',
      headerName: 'Pick Address',
      width: 230,
      renderCell: (params) => {
        const address = pickAddresses[params.id];
        return (
          <span>
            {address}{' '}
            {address && (
              <button
                onClick={() => handleClick(params.row.latitude, params.row.longitude)}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                Show Address
              </button>
            )}
          </span>
        );
      },
    },
    {
      field: 'dropAddress',
      headerName: 'Drop Address',
      width: 230,
      renderCell: (params) => {
        const address = dropAddresses[params.id];
        return (
          <span>
            {address}{' '}
            {address && (
              <button
                onClick={() => handleClick(params.row.latitude, params.row.longitude)}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                Show Address
              </button>
            )}
          </span>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => {
        const rideId = params.row.id;
        return (
          <div className="cellAction">
            <ul>
              <i>
                <Link to="test" style={{ textDecoration: 'none' }}>
                  <button
                    onClick={() => navigate('/ride')}
                    style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}
                  >
                    <div className="viewButton" style={{ height: '60%' }}>
                      View
                    </div>
                  </button>
                </Link>
              </i>
              <i>
                <button
                  onClick={() => navigate('new')}
                  style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}
                >
                  <div className="updateButton" style={{ height: '60%' }}>
                    Update
                  </div>
                </button>
              </i>
              <i>
                <button
                  onClick={() => handleDelete(rideId)}
                  style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}
                >
                  <div className="deleteButton" style={{ height: '60%' }}>
                    Delete
                  </div>
                </button>
              </i>
            </ul>
          </div>
        );
      },
    },
  
  ];

  async function reverseGeocode(latitude, longitude) {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrbnVxZmowaHN5M2VzMW1udmp2c2VlIn0.ldYyGbY5RqFvd1VTg10FAQ`
     
        );
      const address = response.data.features[0].place_name;
      return address;
    } catch (error) {
      console.log(error);
      return ''; // Return an empty string if there's an error
    }
  }

  function handleDelete(_id) {
    axios
      .delete(`/rides/${_id}`)
      .then((res) => {
        const updatedRecords = records.filter((record) => record.id !== _id);
        setRecords(updatedRecords);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/rides');
        const ridesData = response.data;
        const ridesWithId = ridesData.map((ride, index) => ({ ...ride, id: index + 1 }));

        setRecords(ridesWithId);
        setFilterRecords(ridesWithId);

        // Fetch and set pick addresses
        const pickAddressPromises = ridesWithId.map((ride) => reverseGeocode(ride.latitude, ride.longitude));
        const pickAddressesData = await Promise.all(pickAddressPromises);
        const pickAddressesObj = ridesWithId.reduce((acc, ride, index) => {
          acc[ride.id] = pickAddressesData[index];
          return acc;
        }, {});
        setPickAddresses(pickAddressesObj);

        // Fetch and set drop addresses
        const dropAddressPromises = ridesWithId.map((ride) => reverseGeocode(ride.dropLatitude, ride.dropLongitude));
        const dropAddressesData = await Promise.all(dropAddressPromises);
        const dropAddressesObj = ridesWithId.reduce((acc, ride, index) => {
          acc[ride.id] = dropAddressesData[index];
          return acc;
        }, {});
        setDropAddresses(dropAddressesObj);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (latitude, longitude) => {
    navigate(`/map/${latitude}/${longitude}`);
  };

  return (
    <div className="datatableride">
      <DataGrid rows={filterRecords} columns={Columns} pageSize={10} checkboxSelection />
    </div>
  );
};

export default Datatableride;
