import React, { useState, useEffect } from "react";
import fetchData from "../modules/fetchData";

const Fetch = ({ src }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(src, setError, setIsLoaded, setData);
  }, [src]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return JSON.stringify(data);
  }
};

export default Fetch;
