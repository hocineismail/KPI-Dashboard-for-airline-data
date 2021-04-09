import React from 'react'
import { Avatar, TopBar } from '@shopify/polaris'
import { HamburgerElastic } from 'react-animated-burgers'
 

//import types
import { ITopnav } from './type'

import './Topnav.scss'
 

export default function Topnav({onOpenMenu, isOpen}: ITopnav): JSX.Element { 
    return (
        <nav className={`app-topbar ${isOpen ? "push-main" : ""}`} >
          
            <div className="app-topbar-menu">
                <HamburgerElastic
                    isActive={isOpen} 
                    toggleButton={onOpenMenu} 
                    buttonWidth={35}
                    barColor="black"
                /> 
            </div>
            <div className="app-topbar-search-bar">
            <TopBar.SearchField
                    onChange={() => console.log('')}
                    value={''}
                    placeholder="Search"
                    showFocusBorder
                />
            </div>

            <div className="app-topbar-account">
                {/* <p>
                  ISMAIL HOCINE 
                 </p> */}
               <Avatar customer name="Ismail HOCINE" /> 
            </div>
            {/* <div style={{marginTop: '10px'}}>
            <HamburgerElastic
            isActive={isOpen} 
            toggleButton={onOpenMenu} 
            buttonWidth={35}
            barColor="black" />
            </div>
            <div style={{float: 'right'}} >
              
                <div style={{float: 'left'}}>
                  <p style={{textAlign: 'right', marginRight: '10px '}}>
                  ISMAIL HOCINE
                   
                  </p>
                 </div>
                 <Avatar customer name="Ismail HOCINE" /> 
                
            </div>  */}

        </nav> 
    )
}
