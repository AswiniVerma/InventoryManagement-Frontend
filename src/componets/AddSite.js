// AddSite.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddTool.css'
import Navbar from './Navbar';
import { api_endpoints } from './api';

const AddSite = () => {

   

  const [data, setData] = useState({
    name: '',
    address: '',
    supervisor: '',
    toolDetails: [{ toolName: '', toolQuantity: '' }],
  });

const handleInputChange = (e, index) => {
  let { id, value } = e.target;
id=id.slice(0,-1)
  setData((prevData) => {
    const newToolDetails = [...prevData.toolDetails];
    newToolDetails[index] = {
      ...newToolDetails[index],
      [id]: value,
    };
console.info(newToolDetails[index])
console.log( {
      ...prevData,
      toolDetails: newToolDetails,
    })
    return {
      ...prevData,
      toolDetails: newToolDetails,
    };
  });
};



  const addTool = () => {
    setData((prevData) => ({
      ...prevData,
      toolDetails: [...prevData.toolDetails, { toolName: '', toolQuantity: '' }],
    }));
  };

  const removeTool = (index) => {
    setData((prevData) => ({
      ...prevData,
      toolDetails: prevData.toolDetails.filter((tool, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make a POST request to your REST API endpoint
    axios.post(api_endpoints.addSite, data)
      .then((response) => {
        console.log('Data posted successfully:', response.data);
        alert(response.data);
        if(response.data!=="not a valid req" && response.data!=="Please enter numeric values for tool quantity")
        window.location.reload();
        // Optionally, you can redirect or perform other actions after successful post
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
      
  };

  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center'>
      <Navbar/>
      <h1 className='text-4xl flex justify-center font-bold'>Add Site</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="name"
          placeholder='name'
          value={data.name}
          onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })}
          required
        />

        {/* <label htmlFor="address">Address:</label> */}
        <input
          type="text"
          id="address"
          placeholder='address'
          value={data.address}
          onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })}
          required
        />

        {/* <label htmlFor="supervisor">Supervisor:</label> */}
        <input className='justify-center'
          type="text"
          id="supervisor"
          placeholder='supervisor'
          value={data.supervisor}
          onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })}
          required
        />

        {/* <label>Tool Details:</label> */}
        {data.toolDetails.map((tool, index) => (
          <div key={index}>
            {/* <label htmlFor={`toolName${index}`}>Tool Name:</label> */}
            <input
              type="text"
              id={`toolName${index}`}
              placeholder='tool name'
              value={tool.toolName}
              onChange={(e) => handleInputChange(e, index)}
              required
            />

            {/* <label htmlFor={`toolQuantity${index}`}>Tool Quantity:</label> */}
            <input
              type="text"
              id={`toolQuantity${index}`}
              placeholder='tool quantity'
              value={tool.toolQuantity}
              onChange={(e) => handleInputChange(e, index)}
              required
            />

            {index > 0 && (
              <button className=' bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full' type="button" onClick={() => removeTool(index)}>
                Remove Tool
              </button>
            )}
          </div>
        ))}

        <button className=' bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full' type="button" onClick={addTool}>
          Add Tool
        </button>

        <button className='justify-center bg-customBlue hover:bg-purple-500 text-white font-bold mt-3 py-2 px-4 rounded-full' type="submit">Add Site</button>
      </form>
    </div>
  );
};

export default AddSite;
