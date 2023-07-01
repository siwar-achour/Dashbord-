import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bartaxi.scss';

const Bartaxi = ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  const fetchData = async () => {
    try {
      const response = await axios.get('/drivers');
      const driverData = response.data;

      if (driverData && driverData.length > 0) { // Check if driverData is defined and has length > 0
        const dateStatusSums = {};

        // Calculate the sum of status values for each date
        driverData.forEach((driver) => {
          const date = driver.date;
          const status = driver.status;

          if (dateStatusSums[date]) {
            dateStatusSums[date] += status ? 1 : 0;
          } else {
            dateStatusSums[date] = status ? 1 : 0;
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.entries(dateStatusSums).map(([date, sum]) => ({
          date,
          sum,
          color: sum > 0 ? '#12B9BA' : '#EC6D0F',
        }));

        setData(chartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chartcomminuty">
      <div className="title">{title}</div>

      <ResponsiveContainer className="barChart" width="100%" aspect={aspect}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <Bar dataKey="sum" fill="#12B9BA">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bartaxi;
