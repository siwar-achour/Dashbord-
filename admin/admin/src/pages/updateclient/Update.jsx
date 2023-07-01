import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Popup from './Popup';
import './update.scss';

import { useParams } from 'react-router-dom';

const Update = ({ inputs, title }) => {
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  const { clientId } = useParams();
  const [client, setClient] = useState({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    status: '',
  });

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`/clients/${clientId}`);
        if (response.status === 200) {
          const data = response.data;
          setClient(data);
        } else {
          setPopupMessage('Failed to fetch client information');
          setShowPopup(true);
        }
      } catch (error) {
        setPopupMessage('An error occurred while fetching client information');
        setShowPopup(true);
      }
    };

    fetchClient();
  }, [clientId]);

  const handleInputChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`/clients/${clientId}`, client);

      if (response.status === 200) {
        setPopupMessage('Update successful');
      } else {
        setPopupMessage('Update failed');
      }
    } catch (error) {
      setPopupMessage('An error occurred');
    }

    setShowPopup(true);
  };

  return (
    <div className="updateclient">
      <Sidebar />
      <div className="updateclientContainer">
        <Navbar />
        <h2 className="updateTitle">Update client</h2>
        
        <div className="right">
           <form className="updateForm" onSubmit={handleFormSubmit}>
            <div className="updateFormItem">
              <label htmlFor="firstname" style={{ marginLeft:'0px' , marginRight:'15px'}}>First Name :</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={client.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="updateFormItem">
              <label htmlFor="age" style={{ marginLeft:'0px' , marginRight:'65px'}}>Age :</label>
              <input
                type="text"
                id="age"
                name="age"
                value={client.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="updateFormItem">
              <label htmlFor="lastname"style={{ marginLeft:'0px' , marginRight:'15px'}}>Last Name :</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={client.lastname}
                onChange={handleInputChange}
              />
            </div>
            <div className="updateFormItem">
              <label htmlFor="email"style={{ marginLeft:'0px' , marginRight:'55px'}}>Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={client.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="updateFormItem">
              <label htmlFor="status" style={{ marginLeft:'0px' , marginRight:'50px'}}>Status :</label>
              <select
                id="status"
                name="status"
                value={client.status}
                onChange={handleInputChange}
              >
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
              </select>
            </div>
          
            <button className="updateButton" type="submit"style={{ marginLeft:'120px' , marginRight:'15px'}}>
              Update
            </button>
          </form>
          {showPopup && <Popup onClose={handleClose} message={popupMessage} />}
        </div>
      </div>
    </div>
  );
};

export default Update;
