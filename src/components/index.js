import Button from './Button';
import Checkbox from './Checkbox';
import Icon from './Icon';
import Progress from './Progress';
import ScrollView from './ScrollView';
import Swiper from './Swiper';
import SwiperItem from './SwiperItem';
import Text from './Text';
import View from './View';

const buttonConfig = require('./Button/config.json');
const checkboxConfig = require('./Checkbox/config.json');
const iconConfig = require('./Icon/config.json');
const progressConfig = require('./Progress/config.json');
const scrollviewConfig = require('./ScrollView/config.json');
const swiperConfig = require('./Swiper/config.json');
const swiperitemConfig = require('./SwiperItem/config.json');
const textConfig = require('./Text/config.json');
const viewConfig = require('./View/config.json');

export default {
	Button,
	Checkbox,
	Icon,
	Progress,
	ScrollView,
	Swiper,
	SwiperItem,
	Text,
	View
};

export const CONFIGS = {
	Button: buttonConfig,
	Checkbox: checkboxConfig,
	Icon: iconConfig,
	Progress: progressConfig,
	ScrollView: scrollviewConfig,
	Swiper: swiperConfig,
	SwiperItem: swiperitemConfig,
	Text: textConfig,
	View: viewConfig
};
