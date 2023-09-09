import './styles.css';
import CanvasJSReact from '@canvasjs/react-charts';
import { useEffect, useState } from "react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const WeatherChart = ({data}) => {

    const [dataPoints, setDataPoints] = useState([]);

    const getDataPoints = () => {
        let list = [];
        for(let i = 0; i < 8; i ++){
            //console.log(data)
            list.push({
                x: data.dates[i],
                y: data.tempList[i]
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
       /*  title:{
            text: "Weather Forecast"
        }, */
        axisX: {
            gridThickness: 0,
            lineThickness: 1,
	        tickThickness: 0,
         //   title: "Time"
        },
        axisY: {
        //    title: "Temperature(°C)",
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
    //const labels = [...Array(40).keys()];
    //labels.values

    return(
        <div className='chart my-5 mx-auto w-75'>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default WeatherChart;