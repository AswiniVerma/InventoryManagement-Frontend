import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import { api_endpoints } from './api';

const ReceiveTools = () => {
   const {id} = useParams();
  const [formData, setFormData] = useState({
    id: id,
    name: '',
    address: '',
    supervisor: '',
    toolDetails: [
      {
        toolName: '',
        toolQuantity: ''
      }
    ]
  });

  useEffect(() => {
    // Simulate fetching data from the API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint
      const response = await axios.get(`${api_endpoints.siteDetails}/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e, index) => {
    let { name, value } = e.target;
    name=name.slice(0,-1)
    if (name.includes('tool')) {
      // Update toolDetails array based on index
      setFormData((prevData) => ({
        ...prevData,
        toolDetails: prevData.toolDetails.map((tool, i) =>
          i === index ? { ...tool, [name]: value } : tool
        )
      }));
    } else {
      // Update other fields
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddTool = () => {
    // Add a new empty toolDetails object
    setFormData((prevData) => ({
      ...prevData,
      toolDetails: [...prevData.toolDetails, { toolName: '', toolQuantity: '' }]
    }));
  };

  const handleRemoveTool = (index) => {
    // Remove the toolDetails object at the specified index
    setFormData((prevData) => ({
      ...prevData,
      toolDetails: prevData.toolDetails.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace 'your-post-api-endpoint' with the actual API endpoint for posting
      const response = await axios.put(api_endpoints.receiveTools, formData);
      console.log('Data successfully updated:', response.data);
      alert(response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center'>
      
      <h1 className='text-4xl flex justify-center font-bold'> Receive Tools</h1>
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        <input className='justify-center' type="text" name="name" value={formData.name} onChange={(e) => handleChange(e)}  autoComplete={formData.name} required/>
      </label>
      <br />
      <label>
        Address:
        <br />
        <input  className='justify-center' type="text" name="address" value={formData.address} onChange={(e) => handleChange(e)}  autoComplete={formData.address} required/>
      </label>
      <br />
      <label>
        Supervisor:
        <br />
        <input className='justify-center' type="text" name="supervisor" value={formData.supervisor} onChange={(e) => handleChange(e)}  autoComplete={formData.supervisor} required/>
      </label>
      <br />
      {formData.toolDetails.map((tool, index) => (
        <div key={index}>
          <label>
            Tool Name:
            <br />
            <input className='justify-center' required
              type="text"
              name={`toolName${index}`}
              value={tool.toolName}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <br />
            Tool Quantity:
            <br />
            <input className='justify-center'  required
              type="text"
              name={`toolQuantity${index}`}
              value={tool.toolQuantity}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <button className='bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full' type="button" onClick={() => handleRemoveTool(index)}>
            Remove Tool
          </button>
          <br />
        </div>
      ))}
      <button className='bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full' type="button" onClick={handleAddTool}>
        Add Tool
      </button>
      <br />
      <button className='bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full' type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default ReceiveTools;
