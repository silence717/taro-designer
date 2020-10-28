import Button from './Button';
import View from './View';

const buttonConfig = require('./Button/config.json');
const viewConfig = require('./View/config.json');

export default {
	Button,
	View
};

export const CONFIGS = {
	Button: buttonConfig,
	View: viewConfig
};
