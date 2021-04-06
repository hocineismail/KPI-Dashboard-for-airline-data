import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout';
import StatisticsSection  from '../../components/Sections/StatisticsSection';
import Table  from '../../components/Table/Table'

export default function Dashboard(): JSX.Element {
    const headerTableTypes = [
        'text',
        'text',
        'numeric',
        'numeric' 
      ] 
    const headerTable = ['ID',
        'Name',
        'Number of trips', 
        'Total amount paid for flights'
      ]
    return (
        <AppLayout title='Default'>
            <StatisticsSection />
            <Table headerTable={headerTable}  headerTableTypes={headerTableTypes}/>
        </AppLayout>
    )
}
