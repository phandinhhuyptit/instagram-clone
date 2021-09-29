/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./reactotron.config').then(() => console.log('Reactotron Ready!'));
}

AppRegistry.registerComponent(appName, () => App);
