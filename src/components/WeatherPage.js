import React, { useEffect, useState } from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import TodayWeatherCard from "./TodayWeatherCard";
import WeatherChart from "./WeatherChart";
import WeatherForecast from "./WeatherForecast";

const WeatherPage = ()=> {
  const [lat, setLat] = useState(12.9762);
  const [long, setLong] = useState(77.6033);
  const [data, setData] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [dates, setDates] = useState([]);

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
    await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      getTempList(result.list)
      console.log("data", result);
    }).catch((error) => {
      console.log(error)
    });
  }

  const getTempList = (data) => {
    let t = [];
    let d = [];
    //console.log("temp list", data)
    if(data){
      for(let i = 0; i < 8; i ++){
        t.push(data[i].main.temp)
        d.push(data[i].dt * 1000)
      }
      console.log(t)
      setTempList(t)
      setDates(d)
    }
  }

  useEffect(() => {
    getLocation();
  }, [lat, long])

  return (
    // <div className="App App-header weather-page my-auto" data-bs-theme="dark">
    <Container className="weather-container w-responsive w-75 text-center m-auto p-3">
      {(data.city) ? (
        <Row className="p-1">
          <h3>{data.city.name}, {data.city.country}</h3>
        </Row>
        ) : (<Row></Row>
      )}
      <Row>
        <Col className="temp-col col-md-3 p-1">
          {(typeof data.list != 'undefined') ? (
            <TodayWeatherCard weatherData={data.list[0]} />
          ): (
            <div></div>
          )}
        </Col>
        <Col className="col-md-8 mx-0">
        <Row className="m-0">
          <WeatherChart tempList={tempList} dates={dates} />
        </Row>
        <Row>
          {/* <WeatherForecast list={data}/> */}
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherPage