import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './newclient.scss';
import Pop from './Pop';

const Newclient = ({ inputs, title }) => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    status: '',
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault(); // Empêche le comportement de soumission par défaut du formulaire

    try {
      const response = await fetch('/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const savedClient = await response.json();
        console.log('Form data saved to the backend:', savedClient);
        setShowPopup(true);
        setPopupMessage('Form data saved successfully!'); // Message de succès
      } else if (response.status === 409) {
        setShowPopup(true);
        setPopupMessage('Data already exists.'); // Message de données existantes
      } else {
        console.error('Failed to save form data to the backend.');
        setShowPopup(true);
        setPopupMessage('Failed to save form data.'); // Message d'erreur
      }
    } catch (error) {
      console.error('An error occurred while saving form data:', error);
      setShowPopup(true);
      setPopupMessage('An error occurred while saving form data.'); // Message d'erreur
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      status: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="newclient">
      <Sidebar />
      <div className="newclientContainer">
        <Navbar />

        <div className="top" style={{ marginLeft: '320px', marginTop: '15px' }}>
          <h1 style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '15px' }}>{title}</h1>
          <div className="back">
            <Link to="/clients" style={{ textDecoration: 'none', marginTop: '25px', marginRight: '15px' }} className="link">
              Back
            </Link>
          </div>
        </div>

        <div className="containerclient">
          <div className="bottom">
            <form onSubmit={handleClick} style={{ marginLeft: '-400px' }}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.label.replace(/\s+/g, '').toLowerCase()}
                    value={formData[input.label.replace(/\s+/g, '').toLowerCase()] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button
                className="buttonsign"
                type="submit"
                style={{ marginTop: '35px', marginBottom: '10px', marginLeft: '0px' }}
              >
                Suivant
              </button>
              {showPopup && <Pop onClose={handleClose} message={popupMessage} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newclient;
