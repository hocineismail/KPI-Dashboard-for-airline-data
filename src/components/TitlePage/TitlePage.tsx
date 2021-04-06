import React from 'react'
import { Heading } from '@shopify/polaris'
type Props = { 
    title: string;
  }
export default function TitlePage({title}: Props): JSX.Element {
  
    return (
        <div className="app-title"> 
            <Heading element="h1">{title}</Heading>
            <hr />
        </div>
    )
}
