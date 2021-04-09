import React from 'react';

import { Card } from '@shopify/polaris';
import { Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';

//import types
import { Idata } from './type';
  

export default function StatisticsSectionChart(): JSX.Element {
    const [data, setdata] = React.useState<Idata>({
        label: [],
        data: []
        });

    React.useEffect(() => {
        fetchPassengers(`${process.env.HOST}/passenger?page=0&size=5`); 

    }, []);

    function fetchPassengers (url: string) { 
        axios
        .get(url)
        .then(response => {    
            console.log(response.data.data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          )
           
            const result = generateDataChart(response.data.data);
            console.log(result)
            setdata(result) 
        });
    }

    function generateDataChart (arr: {name: string, trips: number}[]) {
        const label = [];
        const data = [];
        for ( let i = 0; i < arr.length ; i++ ) {
            label.push(arr[i].name.slice(0,2))
            data.push(arr[i].trips)
        }
        return {
            label,
            data
        }
    }
    const dataD = {
        labels: data.label,
        datasets: [{
            data: data.data,
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    const dataL = {
        labels: data.label,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.data
          }
        ]
      };
    
    return (
        <div>
            <div style={{margin: '20px'}}>
                <Card title="title" >
                    <Line data={dataL} />  
                </Card>
            </div>
            <div style={{margin: '20px'}}>
                <Card title="title" >
                    <Doughnut data={dataD} />
                </Card>
            </div> 
        </div>
    )
}
