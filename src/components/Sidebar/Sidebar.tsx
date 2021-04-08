import React  from 'react'
import ItemSIdebar from './ItemSidebar/ItemSidebar';
//import types
import { IMenu } from './type';

//import Fake routes for our project
import { routesList } from './routes';

//import style
import './Sidebar.scss';

function Sidebar({ isOpen  }: IMenu ): JSX.Element {
    
    return (
        <div className="app-grid-sidebar">
           
            <div className={`app-sidebar ${ isOpen ? "push-menu" : ""}`}>
            <div className="app-sidebar-header">
                <img
                   className="app-sidebar-logo"
                   width={100} 
                   src="https://ismailhocine.com/static/media/logo-ismailhocine.b54bec46.png" alt="" />
               <span className="company-name">airline Dashboard</span>
            </div>
            <ul className="app-sidebar-navigation">
        <li className="item-sidebar-active">
           <i className={`fas fa-users`}></i>  sdsdsd
        </li>
            {
                routesList.map((nav, index) =>  
                    
                    <ItemSIdebar 
                        key={index} 
                        name={nav.name}
                        icon={nav.icon}
                    />
                 )
            } 
             </ul>
           </div>
        </div>
    )
}
export default Sidebar;
