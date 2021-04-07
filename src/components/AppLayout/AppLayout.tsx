import React, {  ReactNode  }  from 'react';
import Topnav from '../Topnav/Topnav';
import Sidebar from '../Sidebar/Sidebar';
import TitlePage from '../TitlePage/TitlePage'
// import { Page } from '@shopify/polaris'
import './AppLayout.scss';

type Props = { 
    title: string,
    children: ReactNode;
  }
function AppLayout({title, children}: Props): JSX.Element {

    return (
        <div className="app-page"> 
          {/* <Sidebar /> */}
          <div className="app-main-view">
            <Topnav />
            <div className="app-container">
              <TitlePage title={title} /> 
              {/* <Page> */}
                {children}
              {/* </Page> */}
            </div>
            </div>
        </div>
    )
}
export default AppLayout;
