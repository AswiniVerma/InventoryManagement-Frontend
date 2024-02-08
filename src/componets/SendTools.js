import React, { useState } from 'react';
import axios from 'axios';
import { api_endpoints } from './api';

const SendTools = () => {
  const [formData, setFormData] = useState({
    // Initialize form data with default values or get from the API
    // For example, if you're updating a user, you might have fields like: name, email, etc.
    siteName: '',
    toolName: '',
    toolQuantity: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

   
    try {
      // Make a PUT request to the API endpoint with the updated data
      const response = await axios.put(api_endpoints.sendTools, formData);

      // Handle the response if needed
      console.log('Update successful:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Update failed:', error);
    }
  };

  return (
    <div>
      <h2>Send Tools</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Site Name:
          <input type="text" name="siteName" value={formData.siteName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tool Name:
          <input type="text" name="toolName" value={formData.toolName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tool Quantity:
          <input type="text" name="toolQuantity" value={formData.toolQuantity} onChange={handleChange} />
        </label>
        {/* Add other form fields as needed */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SendTools;
