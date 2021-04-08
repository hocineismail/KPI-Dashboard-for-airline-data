import React from 'react'
import { Avatar } from '@shopify/polaris'
import './Topnav.scss'
export default function Topnav(): JSX.Element { 
    return (
        <nav className="app-topbar"> 
            <ul>
                <li> 
                <div style={{float: 'left'}}>
                  <p style={{textAlign: 'right', marginRight: '10px '}}>
                  ISMAIL HOCINE
                    <br />
                    ismailhocine93@gmail.com
                  </p>
                 </div>
                 <Avatar customer name="Ismail HOCINE" /> 
                </li>
            </ul> 
        </nav> 
    )
}
