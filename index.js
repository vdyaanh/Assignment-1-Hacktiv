/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.js';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store/index';


AppRegistry.registerComponent(appName, () => App);
