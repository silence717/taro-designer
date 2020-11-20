import Button from './Button';
import View from './View';
import ScrollView from './ScrollView';
import Swiper from './Swiper';
import SwiperItem from './SwiperItem';

const buttonConfig = require('./Button/config.json');
const viewConfig = require('./View/config.json');
const scrollViewConfig = require('./ScrollView/config.json');
const swiperConfig = require('./Swiper/config.json');
const swiperItemConfig = require('./SwiperItem/config.json');

export default {
	Button,
	View,
	ScrollView,
	Swiper,
	SwiperItem
};

export const CONFIGS = {
	Button: buttonConfig,
	View: viewConfig,
	ScrollView: scrollViewConfig,
	Swiper: swiperConfig,
	SwiperItem: swiperItemConfig
};
