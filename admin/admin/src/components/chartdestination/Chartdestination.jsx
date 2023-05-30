import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './chartdestination.scss';
import axios from 'axios';

const Chartdestination = ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/rides');
      const rideData = response.data;

      console.log('rideData:', rideData); // Check the response from the API

      if (rideData.length > 0) {
        const pickOccurrences = {};
        const destinationOccurrences = {};

        rideData.forEach((ride) => {
          const pickAddress = ride.pick.address; // Modify the property to access the pick address
          const dropAddress = ride.drop.address; // Modify the property to access the drop address

          if (!pickOccurrences[pickAddress]) {
            pickOccurrences[pickAddress] = 1;
          } else {
            pickOccurrences[pickAddress]++;
          }

          if (!destinationOccurrences[dropAddress]) {
            destinationOccurrences[dropAddress] = 1;
          } else {
            destinationOccurrences[dropAddress]++;
          }
        });

        const pickChartData = Object.keys(pickOccurrences).map((pick) => ({
          name: pick,
          occurrences: pickOccurrences[pick],
        }));

        const destinationChartData = Object.keys(destinationOccurrences).map((destination) => ({
          name: destination,
          occurrences: destinationOccurrences[destination],
        }));

        console.log('pickChartData:', pickChartData); // Verify the data format
        console.log('destinationChartData:', destinationChartData); // Verify the data format

        setData({ pick: pickChartData, destination: destinationChartData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chartdestinationn">
      <div className="title">hi</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart width={730} height={250} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="red" />
          <YAxis stroke="gray" />
          <Tooltip />
          {data.pick && (
            <Bar dataKey="occurrences" data={data.pick} fill="#FF0000">
              {data.pick.map((entry, index) => (
                <Cell key={`pick-${index}`} fill="#FF0000" />
              ))}
            </Bar>
          )}
          {data.destination && (
            <Bar dataKey="occurrences" data={data.destination} fill="#12B9BA">
              {data.destination.map((entry, index) => (
                <Cell key={`destination-${index}`} fill="#12B9BA" />
              ))}
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chartdestination;
