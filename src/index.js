import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router';
import routes from './routes';


ReactDOM.render(
  <App>
    <Router routes={routes} />
  </App>,
document.getElementById('root'));
registerServiceWorker();
