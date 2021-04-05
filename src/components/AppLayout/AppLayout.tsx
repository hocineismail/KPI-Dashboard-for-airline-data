import React, {  ReactNode  }  from 'react';
import Topnav from '../Topnav/Topnav';
import Sidebar from '../Sidebar/Sidebar';
import './AppLayout.scss';

type ComponentProps = { 
    children: ReactNode;
  }
function AppLayout({children}: ComponentProps): JSX.Element {

    return (
        <div className="app-page">
          <Topnav />
          <Sidebar />
          <div className="app-container">
            {children}
          </div>
        </div>
    )
}
export default AppLayout;
