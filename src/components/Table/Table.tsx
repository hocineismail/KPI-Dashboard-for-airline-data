import React from 'react'

import { Card, DataTable } from '@shopify/polaris';
import axios from 'axios';
import FooterTable from './footerTable/FooterTable'


type Props = { 
    headerTable: any,
    headerTableTypes: any
    // data:  string[]
  }
export default function Table({ headerTable, headerTableTypes }:Props): JSX.Element {
    // var listOfLists : string[][];
    // const defaultPosts:Idata[] = [];
   
    // const [data, setdata]: [Idata[], (posts: Idata[]) => void] = React.useState(defaultPosts);
    const [data, setdata] = React.useState<Array<Array<string>>>();
    React.useEffect(() => {
        getPasseger(`${process.env.HOST}/passenger?page=0&size=25`); 

      }, []);
    function getPasseger (url: string) { 
        axios
        .get(url)
        .then(response => {  
            const dt = dataAsTable(response.data.data)
            setdata(dt)
            console.table(dt)
        });
    }
   function dataAsTable (arr: {_id: string, name: string, trips: string }[])  {
 
      let dataTable: any; 
      let calculatSale: string
      for (let i = 0 ; i < arr.length; i++ ) {
        calculatSale = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(arr[i].trips) * 199)  
        dataTable.push([arr[i]._id, arr[i].name, arr[i].trips, calculatSale])
      }
     return dataTable
   }
    return (
        <div>
            <hr />

        <Card>
          <DataTable
            columnContentTypes={headerTableTypes}
            headings={headerTable}
            rows={data ? data : [[]]} 
            footerContent={ <FooterTable />}
          />
         
        </Card>
      </div>
    )
}
