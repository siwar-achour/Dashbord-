import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './charttaxi.scss';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

function Charttaxi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('/drivers');
      const driverData = response.data;
  
      if (driverData.length > 0) {
        const filteredData = driverData.filter(
          (driver) => driver.status === true || driver.status === false
        );
  
        const statusValues = filteredData.map((driver) => driver.status);
        const uniqueStatus = [...new Set(statusValues)];
  
        const chartData = {
          labels: uniqueStatus.map((status) =>
            status ? 'Available' : 'Not Available'
          ),
          datasets: [
            {
              label: 'Poll',
              data: uniqueStatus.map(
                (status) => statusValues.filter((value) => value === status).length
              ),
              backgroundColor: uniqueStatus.map((status) =>
                status ? '#12B9BA' : '#EC6D0F'
              ),
              borderColor: uniqueStatus.map((status) =>
                status ? '#12B9BA' : '#EC6D0F'
              ),
              circumference: 360,
              rotation: 360,
            },
          ],
        };
  
        setData(chartData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const options = {};
 const gaugeText={
  id:'gaugeText',
  beforeDatasetsDraw(charts,args,pluginOptions){
    const {ctx,chartArea:{top,bottom,left,right,width,height}}=charts;
  const xCenter = charts.getDatasetMeta(0).data[0].x;
  const yCenter = charts.getDatasetMeta(0).data[0].y;
    ctx.save();
  ctx.fillStyle='gray';
  ctx.font="bold 15px sans-serif";
  ctx.textAlign='center';
  ctx.textbaseline='baseline';
  ctx.fillText(`Value : ${data.datasets[0].data[0]} taxi disponible` , xCenter,yCenter);
  }


 }
  return (
    <div>
      <div>
    
      </div>
      <form >
      <div className="charttaxicontainer">
        {data ? <Doughnut data={data} options={options} plugins={[gaugeText]}  /> : <p>Loading data...</p>}
      </div>
      </form>
     
    </div>
  );
}

export default Charttaxi;
