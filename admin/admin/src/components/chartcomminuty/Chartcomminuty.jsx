import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import './chartcomminuty.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

function Chartcomminuty() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/clients');
      const clientData = response.data;

      if (clientData.length > 0) {
        const ageOccurrences = {};

        // Count the occurrences of each age
        clientData.forEach((client) => {
          const age = client.age;
          if (ageOccurrences[age]) {
            ageOccurrences[age]++;
          } else {
            ageOccurrences[age] = 1;
          }
        });

        // Prepare the data for the chart
        const labels = Object.keys(ageOccurrences);
        const occurrences = Object.values(ageOccurrences);

        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Age Occurrences',
              data: occurrences,
              backgroundColor: ['#029FA0','#12B9BA','#24C3C4','#37CDCD','#49D6D6', '#5CE0E0'],
              borderColor: ['#029FA0','#12B9BA','#24C3C4','#37CDCD','#49D6D6', '#5CE0E0'],
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

  return (
    <div>
      <div  className='f'>
      <div className='chartcomminuty'>
      {data && <Doughnut data={data} options={options} />}
  
      </div>
      </div>
      
        </div>
  );
}

export default Chartcomminuty;
