import React from 'react'
import { Avatar } from '@shopify/polaris'
import { HamburgerElastic } from 'react-animated-burgers'
import './Topnav.scss'

type Props = {  
    isOpen: boolean,
    onOpenMenu: () => void;    
  }

export default function Topnav({onOpenMenu, isOpen}: Props): JSX.Element { 
    return (
        <nav className="app-topbar"
                style={{
              marginLeft: isOpen ? '300px' : '0px',
              marginRight: isOpen ? '-300px' : '0px',
              transition: '0.3s'}}>
            <div style={{marginTop: '10px'}}>
            <HamburgerElastic
            isActive={isOpen} 
            toggleButton={onOpenMenu} 
            buttonWidth={35}
            barColor="black" />
            </div>
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
