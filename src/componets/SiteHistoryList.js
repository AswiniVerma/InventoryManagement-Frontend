// YourComponent.js
import React, { useEffect, useState } from 'react';
import SiteHistoryListTable from './SiteHistoryListTable'; // Adjust the path based on your project structure
import axios from 'axios';
import Navbar from './Navbar';
import Loading from './Loading';
import { api_endpoints } from './api';

const SiteHistoryList = () => {
  const [siteList, setSiteList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data from the API
    axios.get(api_endpoints.siteHistoryList)
      .then((response) => {
        setSiteList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
       <Navbar/>
       {loading ? (
             <Loading/>
             ):(
                <>
      <h1 className='text-4xl flex justify-center font-bold'>Site History List</h1>
      
      <SiteHistoryListTable sites={siteList} />
       </>
             )
            }
    </div>
  );
};

export default SiteHistoryList;
