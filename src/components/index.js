import Button from './Button';
import View from './View';
import ScrollView from './ScrollView';
import Swiper from './Swiper';
import SwiperItem from './SwiperItem';
import Icon from './Icon';

const buttonConfig = require('./Button/config.json');
const viewConfig = require('./View/config.json');
const scrollViewConfig = require('./ScrollView/config.json');
const swiperConfig = require('./Swiper/config.json');
const swiperItemConfig = require('./SwiperItem/config.json');
const iconConfig = require('./Icon/config.json');

export default {
	Button,
	View,
	ScrollView,
	Swiper,
	SwiperItem,
	Icon
};

export const CONFIGS = {
	Button: buttonConfig,
	View: viewConfig,
	ScrollView: scrollViewConfig,
	Swiper: swiperConfig,
	SwiperItem: swiperItemConfig,
	Icon: iconConfig
};
