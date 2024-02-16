import React, { useState } from 'react'
import Axios from 'axios'
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AddTool.css'
import { api_endpoints } from './api';

import Navbar from './Navbar';
function ToolRepaired() {
  const url = api_endpoints.toolRepaired
    const navigate = useNavigate();
   const {id, name, quantity} = useParams();
  const [data, setData] = useState({
    id:id,
    name:name,
    quantity:quantity
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
      id:data.id,
      name:data.name,
      quantity:data.quantity
    })
    .then(res=>{
      console.log(res.data);
       if(res.data==="Invalid number of tools entered"){
        alert(res.data)
        window.location.reload()
      }
      alert(res.data)
      navigate('/getAllDamagedTool')
    
    })

    
    
  }

  return (
    <>
    <Navbar/>
    <div className='text-center'>
      <h1 className='text-4xl flex justify-center font-bold'> Enter the number of tools repaired:</h1>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text" required/>
          
          <input onChange={(e)=>handle(e)} id="quantity" value={data.quantity} placeholder="Quantity " type="text" required />
          <button>Update</button>
        </form>
    </div>
    </>
  )
}

export default ToolRepaired
