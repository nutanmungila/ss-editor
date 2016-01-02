import React from 'react';
import ReactDOM from 'react-dom';
import { default as RootView } from './containers/Root';
import configureStore from './store/configureNutan';

const model = configureStore();

ReactDOM.render(
  <RootView store={model}/>,
  document.body.appendChild(document.createElement('div'))
);
