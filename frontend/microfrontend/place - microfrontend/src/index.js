import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Place from './place-microfrontend';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Place,
  errorBoundary(err, info, props) {
    return <div>Error in Place Microfrontend</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;