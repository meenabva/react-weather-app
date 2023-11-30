import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Row, Col } from "react-bootstrap";

const WeatherForecast = ({weatherList}) => {
    
    const [forecast, setForecast] = useState([])

    const getDayAndWeather = () => {
        let currentDate = Date.now()
        
        for(let element of weatherList){
            element.dt = new Date(element.dt * 1000).getDay();
            if(element.dt > currentDate){
                setForecast([...forecast].push(element))
            }
        }
        // weatherList.forEach((element) => {
        //     element.dt = new Date(element.dt * 1000).getDay();
        //     if(element.dt > currentDate){
        //         setForecast([...forecast].push(element))
        //     }
        // })
    }

    useEffect(() => {
        //console.log(weatherList)
        getDayAndWeather()
    }, [])

    return(
        <>
        {
            forecast.map((element) => {
                return(
                    <Card data-bs-theme="dark">
                    <Card.Body>
                        <Card.Title>
                            <span>{element.dt}</span>
                        </Card.Title>
                        <Card.Text>
                            <Row>
                                <Col className='p-0 m-0'>
                                <img src={`${process.env.REACT_APP_ICON_URL}/${element.weather[0].icon}@2x.png`} />
                                </Col>
                                <Col className='temp-col p-0 m-0'>
                                <Row>
                                <h1 className='align-middle'>{element.main.temp}<small>°C</small></h1>
                                </Row>
                                </Col> 
                            </Row>
                            <Row>
                            <h5>{element.weather[0].description}</h5>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                )
            })
        }
        </>
    )
}

export default WeatherForecast;