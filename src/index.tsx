import React from "react";
import ReactDOM from "react-dom";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

import App from "./App";

ReactDOM.render(
    <AppProvider i18n={enTranslations}>
     <App />
    </AppProvider> 
  , document.querySelector("#root"));