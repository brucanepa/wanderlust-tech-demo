import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/configureStore';
import Root from './src/components/Root';

const store = configureStore();

const WanderLust = () => (
  <Root store={ store } />
);

AppRegistry.registerComponent('WanderLust', () => WanderLust);
