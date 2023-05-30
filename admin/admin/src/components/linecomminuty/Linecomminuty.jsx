import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './linecomminuty.scss';

const Linecomminuty = ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/clients');
      const clientData = response.data;

      if (clientData.length > 0) {
        const ageCounts = {};

        // Calculate the occurrence count for each age
        clientData.forEach((client) => {
          const age = client.age.toString();
          if (ageCounts[age]) {
            ageCounts[age]++;
          } else {
            ageCounts[age] = 1;
          }
        });

        // Prepare the data in the required format for the chart
        const chartData = Object.entries(ageCounts).map(([age, count]) => ({
          age,
          Count: count,
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

      <ResponsiveContainer className="area"  width="100%" aspect={aspect}>
   
        <AreaChart   data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#029FA0" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#029FA0" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
          <XAxis dataKey="age" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Count" stroke="#029FA0" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
        
      </ResponsiveContainer>


    </div>
  );
};

export default Linecomminuty;
