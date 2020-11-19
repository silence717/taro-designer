import Button from './Button';
import View from './View';
import ScrollView from './ScrollView';

const buttonConfig = require('./Button/config.json');
const viewConfig = require('./View/config.json');
const scrollViewConfig = require('./ScrollView/config.json');

export default {
	Button,
	View,
	ScrollView
};

export const CONFIGS = {
	Button: buttonConfig,
	View: viewConfig,
	ScrollView: scrollViewConfig
};
