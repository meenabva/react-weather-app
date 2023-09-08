import React from 'react';
import "./styles.css";
import { Card } from 'react-bootstrap'

const Weather = ({weatherData}) => {
  
/*   useEffect(() => {
    console.log("props", weatherData)
  }, [])
 */
  return(
    <Card data-bs-theme="dark">
      <Card.Body>
          <Card.Title>
            <h2 className='mb-3'>{weatherData.name}</h2>
          </Card.Title>
          <Card.Text className='m-0 p-0'>
            <h3 className='mt-3'>{weatherData.main.temp}</h3>
            <img src={`${process.env.REACT_APP_ICON_URL}/${weatherData.weather[0].icon}@2x.png`} />
            <h5>{weatherData.weather[0].description}</h5>
          </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Weather;