import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://myntra-backend-i6qv.onrender.com/GetAll", { withCredentials: true })
      .then((res) => {
        console.log("Fetched data");
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        setError(err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, error }}>
      {children}
    </DataContext.Provider>
  );
};
