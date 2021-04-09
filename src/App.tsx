import * as React from 'react'; 
import Dashboard from './pages/dashboard/Dashboard';
import './global.scss'


function App(): JSX.Element {
  const [loading, setloading] = React.useState(true)
  React.useEffect(() => {
   
     setTimeout( function()  {
      setloading(false)
     },3500 )
  }, [])
  return (   
     loading ?
     <div>
    <div className="about">
   <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span className="icon"></span>
   </a>
   <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span className="icon"></span>
   </a>
   <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span className="icon"></span>
   </a>
   <a className="bg_links logo"></a>
</div>
 

<div className="content">
   <div className="loading">
<p>loading</p>
      <span></span>
   </div>
</div>
   </div> :  <Dashboard />  
   
  );
} 
export default App;
