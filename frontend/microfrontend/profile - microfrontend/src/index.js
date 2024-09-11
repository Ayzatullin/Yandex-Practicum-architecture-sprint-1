import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Profile from './profile-microfrontend';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Profile,
  errorBoundary(err, info, props) {
    return <div>Error in Profile Microfrontend</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;