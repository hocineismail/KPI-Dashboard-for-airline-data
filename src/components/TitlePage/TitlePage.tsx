import React from 'react'
import { Heading } from '@shopify/polaris'

//import types
import { ITitlePage } from './type'
 
export default function TitlePage({title}: ITitlePage): JSX.Element {
  
    return (
        <div className="app-title"> 
            <Heading element="h1">{title}</Heading>     
        </div>
    )
}
