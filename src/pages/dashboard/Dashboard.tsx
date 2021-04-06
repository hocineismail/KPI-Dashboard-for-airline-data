import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout';
import StatisticsSection  from '../../components/Sections/StatisticsSection'
export default function Dashboard(): JSX.Element {
    return (
        <AppLayout title='Default'>
            <StatisticsSection />
        </AppLayout>
    )
}
