import React, { useState } from 'react'
import Axios from 'axios'
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AddTool.css'
import { api_endpoints } from './api';
import Navbar from './Navbar';
function UpdateSite() {
  const url = api_endpoints.updateSite
    const navigate = useNavigate();
   const {id, siteName, address, supervisor} = useParams();
  const [data, setData] = useState({
    
    siteName:siteName,
    address:address,
    supervisor:supervisor
  })

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.put(url,{
      id:id,
      siteName:data.siteName,
      address:data.address,
      supervisor:data.supervisor
    })
    .then(res=>{
      console.log(res.data);
      alert("Site Updated")
      navigate('/allSite')
    
    })

    
    
  }

  return (
    <>
    <Navbar/>
    <div className='text-center'>
      <h1 className='text-4xl flex justify-center font-bold'> Update Site Details</h1>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="siteName" value={data.siteName} placeholder="name" type="text" required/>
          <input className='p-2 w-auto' onChange={(e)=>handle(e)} id="address" value={data.address} placeholder="Address " type="text" required />
          <input onChange={(e)=>handle(e)} id="supervisor" value={data.supervisor} placeholder="Address " type="text" required />
          <button>Update</button>
        </form>
    </div>
    </>
  )
}

export default UpdateSite
