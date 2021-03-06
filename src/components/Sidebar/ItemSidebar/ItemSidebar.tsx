import React  from 'react'


//import types
import { IRoute } from '../type'; 

 

function ItemSidebar({ icon , name}: IRoute ): JSX.Element {

    return (
        <li className="app-item-sidebar">
           <i className={icon}></i>   {name}
        </li>
    )
}
export default ItemSidebar;
