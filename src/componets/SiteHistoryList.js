// YourComponent.js
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SiteHistoryListTable from './SiteHistoryListTable'; // Adjust the path based on your project structure
import axios from 'axios';
import Navbar from './Navbar';
import { api_endpoints } from './api';

const SiteHistoryList = () => {
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get(api_endpoints.siteHistoryList)
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
      <h1 className='text-4xl flex justify-center font-bold'>Site History List</h1>
      
      <SiteHistoryListTable sites={siteList} />
    </div>
  );
};

export default SiteHistoryList;
