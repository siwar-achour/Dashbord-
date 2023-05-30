import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './lineresult.scss';

const Lineresult= ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/rides');
      const rideData = response.data;

      if (rideData.length > 0) {
        const nameData = {};

        // Calculate the variation between cost and theoretical_price for each name
        rideData.forEach((ride) => {
          const cost = ride.cost;
          const theoreticalPrice = ride.theoretical_price;
          const name = ride.name;

          if (nameData[name]) {
            nameData[name].variation = theoreticalPrice - cost;
          } else {
            nameData[name] = {
              cost: cost,
              theoretical_price: theoreticalPrice,
              name: name,
              variation: theoreticalPrice - cost,
            };
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.values(nameData);

        setData(chartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chartresult">
      <div className="title">{title}</div>

      <ResponsiveContainer className="area" width="100%" aspect={aspect}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#029FA0" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#029FA0" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="variation" stroke="#029FA0" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Lineresult;
