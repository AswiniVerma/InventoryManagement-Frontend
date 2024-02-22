import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import './AddTool.css'
import Navbar from './Navbar';
import { api_endpoints } from './api';
function AddExtraTool() {

  const { siteName } = useParams();  
  const url = api_endpoints.addExtraTool
  const [data, setData] = useState({
    siteName:siteName,
    toolName:"",
    toolQuantity:"",
  })

   //new mod
   const [toolNames, setToolNames] = useState([]);

   useEffect(() => {
     // Fetch tool names from the API
     Axios.get(api_endpoints.allTools)
       .then(response => {
         setToolNames(response.data);
       })
       .catch(error => {
         console.error('Error fetching tool names:', error);
       });
   }, []); // Empty dependency array to fetch data only once on component mount
 
   //new mod

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      siteName:data.siteName,
      toolName:data.toolName,
      toolQuantity:data.toolQuantity
    })
    .then(res=>{
      console.log(res.data);
      alert(res.data);
    
    })

    
    
  }

  return (
    <>
      <Navbar/>
      <div className='text-center'>
        <h1 className='text-4xl flex justify-center font-bold'>Add Extra Tool</h1>
        <form onSubmit={(e)=>submit(e)}>
        <label htmlFor={`siteName`} className="block text-sm font-medium text-gray-700 mb-1">Site Name:</label>
          <input onChange={(e)=>handle(e)} id="siteName" value={data.siteName} placeholder="site name" type="text" readOnly />
          {/* <input onChange={(e)=>handle(e)} id="toolName" value={data.toolName} placeholder=" Tool Name " type="text" required /> */}
           {/* Dropdown for Tool Name */}
           <label htmlFor={`toolName`} className="block text-sm font-medium text-gray-700 mb-1">Tool Name:</label>
           <select
           className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 mb-4"
            onChange={(e) => handle(e)} id="toolName" value={data.toolName} required>
            <option value="" disabled>Select Tool Name</option>
            {toolNames.map((toolName, index) => (
              <option key={index} value={toolName.name}>
                {toolName.name}
              </option>
            ))}
          </select>

          <input onChange={(e)=>handle(e)} id="toolQuantity" value={data.toolQuantity} placeholder="Tool Quantity" type="text" required/>
          <button>Add Tool</button>
        </form>
    </div>
    </>
    
  )
}

export default AddExtraTool
