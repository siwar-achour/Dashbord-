import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import './chartresult.scss';

const Chartresult = ({ aspect, title }) => {
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

        // Calculate the total cost and theoretical price for each ride name
        rideData.forEach((ride) => {
          const cost = ride.cost;
          const theoreticalPrice = ride.theoretical_price;
          const name = ride.name;

          if (nameData[name]) {
            nameData[name].cost += cost;
            nameData[name].theoretical_price += theoreticalPrice;
          } else {
            nameData[name] = {
              cost: cost,
              theoretical_price: theoreticalPrice,
              name: name,
            };
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.values(nameData).map((entry, index) => ({
          name: entry.name,
          cost: entry.cost,
          theoretical_price: entry.theoretical_price,
          costGradientFill: `url(#cost-gradient-${index})`, // Add costGradientFill property
          priceGradientFill: `url(#price-gradient-${index})`, // Add priceGradientFill property
        }));

        setData(chartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chartresult">
      <div className="title">Variation in theorical and real prices</div>

      <ResponsiveContainer className="barChart" width="100%" height="100%" aspect={aspect}>
        <BarChart data={data} margin={{ top: 40, right: 30, left: 25, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" label={{ position: 'insideBottom', offset: -10 }} />
          <YAxis stroke="gray" label={{ value: 'Price', angle: -90, position: 'insideLeft', offset: -10 }} />
          <Tooltip labelFormatter={(label) => `Name: ${label}`} />

          <Bar dataKey="cost" name="Cost" barSize={20} fill="#12B9BA">
            {data.map((entry, index) => (
              <Cell key={`cell-cost-${index}`} fill={entry.costGradientFill} />
            ))}
          </Bar>
          <Bar dataKey="theoretical_price" name="Theoretical Price" barSize={20} fill="#EC6D0F">
            {data.map((entry, index) => (
              <Cell key={`cell-price-${index}`} fill={entry.priceGradientFill} />
            ))}
          </Bar>

          <Legend />

          <defs>
            {data.map((entry, index) => (
              <linearGradient key={`cost-gradient-${index}`} id={`cost-gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#12B9BA" />
                <stop offset="100%" stopColor="#12B9BA" stopOpacity={0} />
              </linearGradient>
            ))}

            {data.map((entry, index) => (
              <linearGradient key={`price-gradient-${index}`} id={`price-gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#EC6D0F" />
                <stop offset="100%" stopColor="#EC6D0F" stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chartresult;
