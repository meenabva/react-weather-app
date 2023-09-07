import './App.css';
import React, { useCallback, useEffect, useState } from "react";
import Weather from './components/Weather';

export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  /* const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  } */

  var options = {
    enableHighAcuracy: false,
    timeout: 5000,
    maximumAge: Infinity
  };

  const fetchData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    }, (error) => {
      console.log(error);
    }, options);
  
  }

  useEffect(() => {
   fetchData()
  }, [])
  
  useCallback(async () => {
/*     if(lat==' ' && long==' ') {
      await fetch(`${process.env.REACT_APP_API_URL}/weather?q=Bengaluru,India&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    } else { */
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
   
  }, [lat, long])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>undefined</div>
      )}
    </div>
  );
}