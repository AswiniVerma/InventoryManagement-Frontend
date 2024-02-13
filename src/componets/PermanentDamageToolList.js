
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ToolList.css'
import { FaToolbox } from 'react-icons/fa';
import Navbar from './Navbar';
import { api_endpoints } from './api';
import Loading from './Loading';
const PermanentDamagedToolList = () =>{
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the REST API
        axios.get(api_endpoints.getAllPermanentDamagedTool)
            .then(response => {
                setTools(response.data);
                 setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                 setLoading(false);
            });
    }, []);
  

  return (
        <div className='overflow-x-auto'>
             <Navbar/>
             {loading ? (
             <Loading/>
             ):(
                <>
          <h1 className='text-4xl flex justify-center font-bold'>Lost Tool List  <FaToolbox/></h1>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool ID</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool Name</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Quantity</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Site Name</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Reason</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Actions</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {tools.map(tool => (
                        <tr key={tool._id}>
                            <td className='py-2 px-4 border-b'>{tool.id}</td>
                            <td  className='py-2 px-4 border-b'>{tool.name}</td>
                            <td className='py-2 px-4 border-b'>{tool.quantity}</td>
                            <td className='py-2 px-4 border-b'>{tool.siteName}</td>
                            <td className='py-2 px-4 border-b'>{tool.reason}</td>
                            <td className='py-2 px-4 border-b'>    
                            <Link className="m-2 button" onClick={()=>{}}>Tool Found</Link>
                            {/* <Link className=" m-2 button" to={`/updateToolList/${tool.id}/${tool.name}/${tool.originalquantity}/${tool.curquantity}`} >Update Tool</Link>  */}
                            </td>


                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
            
            </>
             )
            }
        </div>
    );
}

export default PermanentDamagedToolList;