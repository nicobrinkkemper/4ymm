import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { render as reactRender } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as FullStory from '@fullstory/browser';
setTimeout(()=>{
  FullStory.init({ orgId: 'W54CA', namespace: 'FS' });
},100)
reactRender(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
