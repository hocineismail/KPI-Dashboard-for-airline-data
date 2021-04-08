import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout';
import StatisticsSection  from '../../components/Sections/StatisticsSection';
import PassengersTable  from '../../components/Table/PassengersTable'

export default function Dashboard(): JSX.Element {

    return (
        <AppLayout title='Default'>
            <StatisticsSection />
            <PassengersTable />  
        </AppLayout>
    )
}
