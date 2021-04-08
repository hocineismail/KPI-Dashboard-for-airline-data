import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout';
import StatisticsSection  from '../../components/Sections/StatisticsSection';
import PassengersTable  from '../../components/Table/PassengersTable'
import StatisticsSectionChart from '../../components/Charts/StatisticsSectionChart'
import './style.scss'

import {  Layout } from '@shopify/polaris'; 
export default function Dashboard(): JSX.Element {

    return ( 
        <AppLayout title='Dashboard' >
          <StatisticsSection /> 
        
         <Layout >  
          <Layout.Section secondary>
          <StatisticsSectionChart />
          </Layout.Section>
 
         
          <Layout.Section >
          <PassengersTable />  
          </Layout.Section>
          
          </Layout>
          
        </AppLayout> 
    )
}
