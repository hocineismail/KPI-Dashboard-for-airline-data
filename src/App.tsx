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
