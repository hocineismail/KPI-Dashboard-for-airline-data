import React  from 'react';
import Topnav from '../Topnav/Topnav';
import Sidebar from '../Sidebar/Sidebar';
import TitlePage from '../TitlePage/TitlePage';

//import types
import { IAppLayout } from './type';

//immport styles
import './AppLayout.scss';

 
function AppLayout({title, children}: IAppLayout): JSX.Element {
    const [isOpen, setisOpen] = React.useState<boolean>(false);
    const onOpenMenu = () => { 
      setisOpen(!isOpen)
    }
    return (
        <div className="app-page"> 
           <Sidebar isOpen={isOpen} /> 
          <div 
            className={`app-main-view ${isOpen? "push-main":""}`}>
            <Topnav onOpenMenu={() => onOpenMenu()} isOpen={isOpen} />
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
