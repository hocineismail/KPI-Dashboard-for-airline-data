import React from 'react';

import { Card } from '@shopify/polaris';

//import types
import { ICard } from './type';

//import styles
import './Card.scss'


export default function StatisticCard({ title, count, loading, icon }: ICard): JSX.Element {
    return (
        <div className="app-card-margin app-card-component">
          <Card sectioned> 
          <i className={`app-card-icon ${icon}`}></i> 
          <p className="app-card-title">
          {title}
          </p>
            <p className="app-card-count">{loading ? <span style={{fontSize: '12px'}}>Loading...</span> : count}</p>
          </Card>
        </div>
    )
}
