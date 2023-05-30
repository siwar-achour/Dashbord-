import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './linetaxi.scss';

const Linetaxi = ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/drivers');
      const driverData = response.data;

      if (driverData.length > 0) {
        const statusCounts = {};

        // Calculate the occurrence count for each driver status
        driverData.forEach((driver) => {
          const status = driver.status;
          if (statusCounts[status]) {
            statusCounts[status]++;
          } else {
            statusCounts[status] = 1;
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.entries(statusCounts).map(([status, count]) => ({
          status: status === 'true' ? 'Available' : 'Not Available',
          Count: count,
          color: status === 'true' ? '#12B9BA' : '#EC6D0F',
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
          <XAxis dataKey="status" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <Bar dataKey="Count" fill="#12B9BA">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linetaxi;
