import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';

export default function App() {
  
  const [lat, setLat] = useState(12.9762);
  const [long, setLong] = useState(77.6033);
  const [data, setData] = useState([]);

  let options = {
    enableHighAcuracy: false,
    timeout: 5000,
    maximumAge: Infinity
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    }, (error) => {
      console.log(error)
    }, options)
    fetchData()
  }

  const fetchData = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    getLocation()
  }, [lat, long])

  return (
    <div className="App App-header">
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data} />
        ): (
          <div></div>
        )}
    </div>
  );
}