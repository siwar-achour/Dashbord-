import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './newride.scss';

const Newride = ({ ride_create, inputs, title }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    theoretical_price: '',
    cost: '',
    date: '',
    time: '',
    pickAddress: {
      type: '',
      coordinates: ['', '']
    },
    dropAddress: {
      type: '',
      coordinates: ['', '']
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si au moins un champ est saisi
    const isFormEmpty = Object.values(formData).every((value) => value === '');
    if (isFormEmpty) {
      console.log('Aucune donnée saisie');
      return;
    }

    try {
      console.log('Enregistrement réussi !');
      await saveRideToDatabase(formData); // Appel de la fonction pour enregistrer la course dans la base de données
      resetFormData(); // Réinitialisation des données du formulaire
    } catch (error) {
      console.error("Erreur lors de l'enregistrement des données", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'pickAddress' || name === 'dropAddress') {
      const addressType = name === 'pickAddress' ? 'pickAddress' : 'dropAddress';
      const addressData = { ...formData[addressType], type: 'Point' };
      const coordinates = addressData.coordinates.map((coord, index) => {
        if (index === 0 && name === 'pickAddress')
          return parseFloat(value);
        if (index === 1 && name === 'dropAddress')
          return parseFloat(value);
        return coord;
      });

      setFormData((prevFormData) => ({
        ...prevFormData,
        [addressType]: {
          ...addressData,
          coordinates
        }
      }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const saveRideToDatabase = async (formData) => {
    try {
      const response = await fetch('/rides', { // Remplacez l'URL avec l'endpoint approprié de votre backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Ride data saved to the backend!');
      } else {
        console.error('Failed to save ride data to the backend.');
      }
    } catch (error) {
      console.error('An error occurred while saving ride data:', error);
    }
  };

  const resetFormData = () => {
    setFormData({
      id: '',
      name: '',
      theoretical_price: '',
      cost: '',
      date: '',
      time: '',
      pickAddress: {
        type: '',
        coordinates: ['', '']
      },
      dropAddress: {
        type: '',
        coordinates: ['', '']
      }
    });
  };

  const isNumberInputValid = (value) => {
    return /^-?\d*\.?\d*$/.test(value); // Permet les nombres entiers et décimaux positifs et négatifs
  };

  const handleNumberInputChange = (e) => {
    const { name, value } = e.target;

    if (!isNumberInputValid(value)) {
      return; // Ignore la saisie si elle n'est pas un nombre valide
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="newride">
      <Sidebar />
      <div className="newrideContainer">
        <Navbar />

        <form onSubmit={handleSubmit}>
          <div className="topride">
            <h1>{title}</h1>
          </div>
          <div className="bottomride">
            <div className="right">
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.id}>{input.label}</label>
                  {input.type === 'number' ? (
                    <input
                      id={input.id}
                      type={input.type}
                      name={input.name}
                      value={formData[input.name]}
                      placeholder={input.placeholder}
                      onChange={handleNumberInputChange}
                    />
                  ) : (
                    <input
                      id={input.id}
                      type={input.type}
                      name={input.name}
                      value={formData[input.name]}
                      placeholder={input.placeholder}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}

              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newride;
