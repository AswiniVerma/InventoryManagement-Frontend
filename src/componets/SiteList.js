// YourComponent.js
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SiteListTable from './SiteListTable'; // Adjust the path based on your project structure
import axios from 'axios';
import Navbar from './Navbar';

import { api_endpoints } from './api';
import {FaClipboardList} from 'react-icons/fa'

const SiteList = () => {
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get(api_endpoints.allSites)
      .then((response) => {
        setSiteList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
       <Navbar/>
      <h1 className='text-4xl flex justify-center font-bold'>Site List <FaClipboardList/> </h1>
      <h1><Link className=" text-2xl bg-customBlue hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" to={`/addSite`} >Add Site</Link></h1>
      {/* <h1><Link className="button" to={`/siteHistory`} >Site History List</Link></h1> */}
      <SiteListTable sites={siteList} />
    </div>
  );
};

export default SiteList;
