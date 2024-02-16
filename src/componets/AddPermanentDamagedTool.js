import React, { useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import './AddTool.css'
import { api_endpoints } from './api'
import Navbar from './Navbar';

function AddPermanentDamagedTool() {
    
  const url = api_endpoints.permanentDamagedTool;
  const { name,quantity,siteName } = useParams();  
  const [data, setData] = useState({
    name:name,
    quantity:quantity,
    siteName:siteName,
    reason:"",
  })

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name:data.name,
      quantity:data.quantity,
      siteName:data.siteName,
      reason:data.reason,
    })
    .then(res=>{
      console.log(res.data);
      alert(res.data);
      window.location.reload();
    
    })

    
    
  }

  return (
    <div >
        <Navbar/>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text" required />
          <input onChange={(e)=>handle(e)} id="quantity" value={data.quantity} placeholder="Quantity" type="text" required/>
          <input onChange={(e)=>handle(e)} id="siteName" value={data.siteName} placeholder="Site Name" type="text" required/>
          <input onChange={(e)=>handle(e)} id="reason" value={data.reason} placeholder="Reason" type="text" required/>
          <button>Add Unrepair Tool</button>
        </form>
    </div>
  )
}

export default AddPermanentDamagedTool
