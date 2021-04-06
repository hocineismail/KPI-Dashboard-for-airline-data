import React from 'react'
import { Card } from '@shopify/polaris'
import './Card.scss'

type Props = { 
    title: string,
    count: number | string,
    loading: boolean
  }


export default function StatisticCard({ title, count, loading }: Props): JSX.Element {
    return (
        <div className="app-card-component">
          <Card title={title} sectioned>
              <h1>{loading ? 'loading' : count}</h1>
          </Card>
        </div>
    )
}
