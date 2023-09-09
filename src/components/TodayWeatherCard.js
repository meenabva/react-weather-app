import React from 'react';
import "./styles.css";
import { Card, Col, Container, Row } from 'react-bootstrap';

const TodayWeatherCard = ({weatherData}) => {

  let date = new Date(weatherData.dt * 1000).toLocaleString();
  
/*   useEffect(() => {
    console.log("props", weatherData)
  }, [])
 */
  return(
    <Card data-bs-theme="dark">
      <Card.Body>
          <Card.Title>
            <span>{date}</span>
          </Card.Title>
          <Card.Text>
            <Row>
                <Col className='p-0 m-0'>
                  <img src={`${process.env.REACT_APP_ICON_URL}/${weatherData.weather[0].icon}@2x.png`} />
                </Col>
                <Col className='temp-col p-0 m-0'>
                <Row>
                  <h1 className='align-middle'>{weatherData.main.temp}<small>°C</small></h1>
                </Row>
                </Col> 
            </Row>
            <Row>
              <h5>{weatherData.weather[0].description}</h5>
            </Row>
          </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TodayWeatherCard;