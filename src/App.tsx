import * as React from 'react'; 
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

function App(): JSX.Element {
  return (   
  <AppProvider i18n={enTranslations}>
   <div>
     React works
   </div>
  </AppProvider> 
  );
} 
export default App;
