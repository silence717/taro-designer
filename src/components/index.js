import Button from './Button';
import Checkbox from './Checkbox';
import Icon from './Icon';
import Input from './Input';
import Label from './Label';
import Progress from './Progress';
import Radio from './Radio';
import ScrollView from './ScrollView';
import Slider from './Slider';
import Swiper from './Swiper';
import SwiperItem from './SwiperItem';
import Switch from './Switch';
import Text from './Text';
import Textarea from './Textarea';
import View from './View';
import WebView from './WebView';

const buttonConfig = require('./Button/config.json');
const checkboxConfig = require('./Checkbox/config.json');
const iconConfig = require('./Icon/config.json');
const inputConfig = require('./Input/config.json');
const labelConfig = require('./Label/config.json');
const progressConfig = require('./Progress/config.json');
const radioConfig = require('./Radio/config.json');
const scrollviewConfig = require('./ScrollView/config.json');
const sliderConfig = require('./Slider/config.json');
const swiperConfig = require('./Swiper/config.json');
const swiperitemConfig = require('./SwiperItem/config.json');
const switchConfig = require('./Switch/config.json');
const textConfig = require('./Text/config.json');
const textareaConfig = require('./Textarea/config.json');
const viewConfig = require('./View/config.json');
const webviewConfig = require('./WebView/config.json');

export default {
	Button,
	Checkbox,
	Icon,
	Input,
	Label,
	Progress,
	Radio,
	ScrollView,
	Slider,
	Swiper,
	SwiperItem,
	Switch,
	Text,
	Textarea,
	View,
	WebView
};

export const CONFIGS = {
	Button: buttonConfig,
	Checkbox: checkboxConfig,
	Icon: iconConfig,
	Input: inputConfig,
	Label: labelConfig,
	Progress: progressConfig,
	Radio: radioConfig,
	ScrollView: scrollviewConfig,
	Slider: sliderConfig,
	Swiper: swiperConfig,
	SwiperItem: swiperitemConfig,
	Switch: switchConfig,
	Text: textConfig,
	Textarea: textareaConfig,
	View: viewConfig,
	WebView: webviewConfig
};
