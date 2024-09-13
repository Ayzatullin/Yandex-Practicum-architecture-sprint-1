import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { registerApplication, start } from 'single-spa';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

registerApplication({
  name: 'auth-microfrontend',
  app: () => import('auth-microfrontend/Auth'),
  activeWhen: ['/signin']
});

registerApplication({
  name: 'place-microfrontend',
  app: () => import('place-microfrontend/Place'),
  activeWhen: ['/cards']
});

registerApplication({
  name: 'profile-microfrontend',
  app: () => import('profile-microfrontend/Profile'),
  activeWhen: ['/users']
});

start();