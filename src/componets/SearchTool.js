import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './AddTool.css';
import { api_endpoints } from './api';
import SearchResultComponent from './SearchResultComponent';

function SearchTool() {
  const url = api_endpoints.searchTool;
  const [data, setData] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    
    setLoading(true);

    Axios.post(url, {
      name: data.name,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Please enter the numeric value of the tool") {
          alert(res.data);
        } else {
         
          setData({ name: "" });
          setSearchResult(res.data);
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
      })
      .finally(() => {
        setLoading(false);
      });
  }


  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="Name"
          type="text"
          
          required
        />
        <button className=' bg-customBlue m-4' type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search Tool'}
        </button>
      </form>

      {/* Conditionally render SearchResultComponent */}
      {searchResult && <SearchResultComponent result={searchResult} />}
    </div>
  );
}

export default SearchTool;
