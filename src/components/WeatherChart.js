import './styles.css';
import CanvasJSReact from '@canvasjs/react-charts';
import { useEffect, useState } from "react";

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart

const WeatherChart = ({tempList, dates}) => {

    const [dataPoints, setDataPoints] = useState([]);

    const getDataPoints = () => {
        let list = [];
        for(let i = 0; i < 8; i ++){
            console.log(dates)
            list.push({
                x: dates[i],
                y: tempList[i]
            })
        }
        setDataPoints(list)
        console.log("points", list)
    }

    useEffect(() => {
        getDataPoints()
    }, [])

    const options = {
        animationEnabled: true,
        theme: "dark1",
        height: 260,
        title:{
            text: "Weather Forecast"
        }, 
        axisX: {
            gridThickness: 0,
            lineThickness: 1,
	        tickThickness: 0,
            title: "Time"
        },
        axisY: {
            title: "Temperature(°C)",
            suffix:"°C",
            gridThickness: 0,
            lineThickness: 1,
	        tickThickness: 0
        },
        data: [{
            yValueFormatString: "##.##°C",
			xValueType: "dateTime",
            type: "spline",
            dataPoints: dataPoints
        }]
    }
    
    return(
        <div className='chart y-5 mx-auto w-75'>
            <CanvasJSChart options = {options}/>
        </div>
    )
}

export default WeatherChart;