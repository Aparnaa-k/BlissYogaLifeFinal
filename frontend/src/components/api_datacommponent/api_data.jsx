import React, { useEffect, useState } from 'react';

const ApiDataComponent = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:9123/api/get')
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setData(data)
          })
          .catch(error => console.error(error));
      }, []);
    // Fetch data from the API
    
    return ([]);
    // Render the fetched data here
  };
  