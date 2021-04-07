import React from 'react'
import StatisticCard from '../Cards/StatisticCard'; 
import axios from 'axios';
// import './ContentSection.scss'
export default function StatisticsSection(): JSX.Element {
    //Generate currency format before fetching data 
    const currency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(0)
    interface Statistic {
        loading: boolean;
        count: number | string; 
      }
    const preFetching = {
        loading: true,
        count: 0 
    }

    const [TotalOfTrips, setTotalOfTrips] = React.useState<Statistic>(preFetching); 
    const [TotalOfAirlines, setTotalOfAirlines] =React.useState<Statistic>(preFetching); 
    const [EstablishingYear, setEstablishingYear] = React.useState<Statistic>(preFetching); 
    const [OverallSalesInEuro, setOverallSalesInEuro] = React.useState<Statistic>({
        loading: true,
        count: currency
    }); 
    const [error, setError] = React.useState<string>(''); 
      React.useEffect(() => {
        getTotalTripsAndallSales(`${process.env.HOST}/passenger`);
        getTotalAirlines(`${process.env.HOST}/airlines`);
      }, []);
    //Get over all sales in euro and total of trips
    function getTotalTripsAndallSales  (url: string) { 
        try {
             axios
                .get(url)
                .then(response => {
                    setTotalOfTrips({
                        loading: false,
                        count: response.data.data.length 
                    })  
                    setOverallSalesInEuro({
                        loading: false,
                        count: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(response.data.data.length * 199) 
                    });
                }).catch((error) => {
                    setError(error)
                });

        } catch (error) {
            setError('Something Wrong')
        }
    } 
      //Get total airlines and oldest airline  
    function getTotalAirlines (url: string) {
        try {
            axios
                .get(url)
                .then(response => { 
                    setTotalOfAirlines({
                        loading: false,
                        count: response.data.length 
                    });
                    getOldestAirline(response.data);
                }).catch((error) => {
                    setError(error);
                });
        } catch (error) {
            setError('Something Wrong');
        }
    } 
      //Find the year Fromat  from random string
      function getOldestAirline (arr: { established: string }[]) {
        let year: number;
        year = 2021;
        //Will create regex for find the correct year
        for (let i = 0; i < arr.length; i++) { 
            if (Date.parse(arr[i].established) < year ) {
                year = parseInt(arr[i].established);
            }   
          } 
          setEstablishingYear({
            loading: false,
            count: year
        });
       }
    return (
        <div className='app-statistics-section'> 
            <StatisticCard title='Total Trips' count={TotalOfTrips.count} loading={TotalOfTrips.loading} />
            <StatisticCard title='Total Airlines' count={TotalOfAirlines.count} loading={TotalOfAirlines.loading} />
            <StatisticCard title='Overall Sales in Euro' count={OverallSalesInEuro.count} loading={OverallSalesInEuro.loading} />
            <StatisticCard title='Establishing Year' count={EstablishingYear.count} loading={EstablishingYear.loading} />
            <i>{error}</i>
        </div>
    )
}
