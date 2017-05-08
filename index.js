import angular from 'angular';
import appComponents from './src/components/main';

import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.css';
import './src/style/oz-notifier.less'; 

const MODULE_NAME = 'oz-notifier';
angular.module(MODULE_NAME, [appComponents.name])
export default MODULE_NAME;