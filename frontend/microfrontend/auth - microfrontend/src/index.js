import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Auth from './auth-microfrontend';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Auth,
  errorBoundary(err, info, props) {
    return <div>Error in Auth Microfrontend</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;