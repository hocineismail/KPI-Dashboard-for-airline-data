import React from 'react'
import { Card } from '@shopify/polaris'
import './Card.scss'

type Props = { 
    title: string,
    count: number | string,
    loading: boolean,
    icon: string
  }


export default function StatisticCard({ title, count, loading, icon }: Props): JSX.Element {
    return (
        <div className="app-card-component">
          <Card  sectioned> 
          <i className={`app-card-icon ${icon}`}></i> 
          <p className="app-card-title">
          {title}
          </p>
            <p className="app-card-count">{loading ? <span style={{fontSize: '12px'}}>Loading...</span> : count}</p>
          </Card>
        </div>
    )
}
