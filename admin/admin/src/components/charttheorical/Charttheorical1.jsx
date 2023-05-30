import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './charttheorical1.scss';

const Charttheorical1= ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/rides');
      const rideData = response.data;

      if (rideData.length > 0) {
        const nameTheoreticalPrices = {};

        // Calculate the total theoretical price for each ride name
        rideData.forEach((ride) => {
          const theoreticalPrice = ride.theoretical_price;
          const name = ride.name;

          if (nameTheoreticalPrices[name]) {
            nameTheoreticalPrices[name].theoretical_price += theoreticalPrice;
          } else {
            nameTheoreticalPrices[name] = {
              theoretical_price: theoreticalPrice,
              name: name,
            };
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.values(nameTheoreticalPrices).map((entry, index) => ({
          name: entry.name,
          theoretical_price: entry.theoretical_price,
        }));

        setData(chartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chartprice2">
      <div className="title">Chart of Theoretical Prices</div>

      <ResponsiveContainer className="barChart" width="100%" height="100%" aspect={aspect}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" label={{  position: 'insideBottom', offset: -10 }} />
          <YAxis stroke="gray" label={{ value: 'Theoretical Price', angle: -90, position: 'insideLeft', offset: -10 }} />
          <Tooltip labelFormatter={(label) => `Name: ${label}`} formatter={(value) => `Theoretical Price: ${value}`} />

          <Bar dataKey="theoretical_price">
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

export default Charttheorical1;
