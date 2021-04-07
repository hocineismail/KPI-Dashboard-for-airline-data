import React from 'react';
import axios from 'axios';
import Table from './Table';
import './Table.scss'


interface Ipagination {
    totalPage: number;
    row: string;
    currentPage: number;
}
interface Idata {
    _id: string, name: string, trips: string
}
export default function PassengersTable(): JSX.Element {

    const [data, setdata] = React.useState<Idata[]>([]);
    const [loading, setloading] = React.useState<boolean>(true);
    const [paginationData, setpaginationData] = React.useState<Ipagination>({
        totalPage: 0,
        row: '25',
        currentPage: -1
    });

    React.useEffect(() => {
        fetchPassengers(0,`${process.env.HOST}/passenger?page=0&size=`,paginationData.row); 

    }, []);

    function fetchPassengers (page: number,url: string, row: string) { 
        axios
        .get(url+row)
        .then(response => {  
            // const generateData = dataAsTable(response.data.data)
            setpaginationData({
                currentPage: page,
                totalPage: response.data.totalPages,
                row: row
                });
            setloading(false)
            setdata(response.data.data) 
        });
    }

const onChnagePage  = (page: number) => {
   setloading(true)
   fetchPassengers(page, `${process.env.HOST}/passenger?page=${page}&size=`,paginationData.row); 
}

const onChangeRow  = (row: string) => {
    setloading(true)
    fetchPassengers(0, `${process.env.HOST}/passenger?page=0&size=`,row); 
 }

  return (
    <Table  
        data={data} 
        paginationData={paginationData}
        loading={loading}
        onchangePage={(value)=>onChnagePage(value)} 
        onChangeRow={(value)=>onChangeRow(value)}
    />
  )
}