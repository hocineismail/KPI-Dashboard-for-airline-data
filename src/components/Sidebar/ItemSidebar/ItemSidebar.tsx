import React  from 'react'
import './ItemSidebar.scss'

interface IRoute {
  
    icon: string; 
    name: string; 
}
function ItemSidebar({  icon , name}: IRoute ): JSX.Element {
   
    
    return (
        <li className="app-item-sidebar">
           <i className={icon}></i>   {name}
        </li>
    )
}
export default ItemSidebar;
