import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './chartprice.scss';

const Chartprice = ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/rides');
      const rideData = response.data;

      if (rideData.length > 0) {
        const costOccurrences = {};

        // Calculate the occurrence count for each ride cost
        rideData.forEach((ride) => {
          const cost = ride.cost;
          if (costOccurrences[cost]) {
            costOccurrences[cost]++;
          } else {
            costOccurrences[cost] = 1;
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.entries(costOccurrences).map(([cost, count]) => ({
          name: cost,
          Count: count,
          color: '#12B9BA',
        }));

        setData(chartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chartprice">
      <div className="title">Chart of Occurences of Cost</div>

      <ResponsiveContainer className="barChart" width="100%" aspect={aspect}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <Bar dataKey="Count">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
            ))}
          </Bar>
          <defs>
            {data.map((entry, index) => (
              <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={index % 2 === 0 ? '#12B9BA' : '#EC6D0F'} />
                <stop offset="100%" stopColor={index % 2 === 0 ? '#12B9BA' : '#EC6D0F'} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chartprice;
