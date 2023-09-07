import React, { useEffect } from 'react';
//import './styles.css';
import { Card } from 'semantic-ui-react'

const Weather = ({weatherData}) => {
  
  useEffect(() => {
    console.log("props", weatherData)
  }, [])

  return(
    <Card>
      <Card.Content>
          <Card.Header className="header">{weatherData.name}</Card.Header>
          <Card.Content>
          <p>{weatherData.main.temp}</p>
          <p>{weatherData.weather[0].description}</p>
          </Card.Content>
      </Card.Content>
    </Card>
  );
}

export default Weather;