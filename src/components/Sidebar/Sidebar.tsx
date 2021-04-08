import React  from 'react'
import ItemSIdebar from './ItemSidebar/ItemSidebar';
import './Sidebar.scss';
const routesList = [
    {
      path: "/",
      name: "Dashboard",
      icon: "fas fa-tachometer-alt"
   },
   {
      path: "/passengers",
      name: "passengers",
      icon: "fas fa-users"
    },
    {
        path: "/",
        name: "",
        icon: "fas fa-users"
    },
    {
        path: "/",
        name: "",
        icon: "fas fa-users"
    }
]
function Sidebar(): JSX.Element {
    
    return (
        <div className="app-grid-sidebar">
            <div className="app-sidebar">
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
