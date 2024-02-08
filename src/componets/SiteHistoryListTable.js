// SiteListTable.js
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {MdDelete} from "react-icons/md"
import { api_endpoints } from './api';

const SiteHistoryListTable = ({ sites }) => {

     const deleteCart = async id =>{
    
      await axios.delete(`${api_endpoints.deleteSiteHistory}/${id}`);
      alert("site hsitory deletd");
      window.location.reload();
    }
  return (
    <div className='overflow-x-auto'>
      <table>
      <thead>
        <tr>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>ID</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>Name</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>Address</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>Supervisor</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>Tool Details</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <tr key={site.id}>
            <td className='py-2 px-4 border-b'>{site.id}</td>
            <td className='py-2 px-4 border-b'>{site.name}</td>
            <td className='py-2 px-4 border-b'>{site.address}</td>
            <td className='py-2 px-4 border-b'>{site.supervisor || 'N/A'}</td>
            <td className='py-2 px-4 border-b'>
              <ul>
                {site.toolDetails.map((tool, index) => (
                  <li key={index}>
                   {tool.toolName}: {tool.toolQuantity}
                  </li>
                ))}
              </ul>
            </td>
            <td className='py-2 px-4 border-b'> 
                    <Link className="" onClick={()=>{deleteCart(site.id)}}><MdDelete className='w-8 h-8 transition-transform transform hover:scale-110'/></Link>
                
                
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default SiteHistoryListTable;
