import React, { useState } from 'react';

const EditPopup = ({ record, handleUpdate, handleClose }) => {
  const [formData, setFormData] = useState(record);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  return (
    <div className="popupBackground">
      <div className="popup">
        <h2>Edit Record</h2>
        <form onSubmit={handleSubmit}>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />

          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />

          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>

          <button type="submit">Save</button>
          <button onClick={handleClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
