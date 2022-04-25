import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlopalStyle from './style/GlopalStyle';
import {Store} from "./store/Store"
import { Provider } from 'react-redux'



ReactDOM.render(
  
  <React.StrictMode>
    <GlopalStyle/>
    <Provider store={Store}>
    <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
