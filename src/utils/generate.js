import { CONFIGS } from '@components';

let types = [];
let jsx = '';
let css = '';
const reg = /\B([A-Z])/g;
const reg2 = /([0-9]{1,})px+/g;

function getSingleStr(key, value) {
	let str = '';
	if (typeof value === 'number' || typeof value === 'boolean') {
		str += ` ${key}={${value}}`;
	}
	if (typeof value === 'string' && !!value) {
		str += ` ${key}="${value}"`;
	}

	return str;
}

function renderProps(props, currentType) {
	let str = '';

	if (!props) return str;

	Object.keys(props).forEach(key => {
		const value = props[key];
		const defaultValue = CONFIGS[currentType].defaultProps[key];
		if (currentType === 'Icon') {
			str += getSingleStr(key, value);
		} else if (key !== 'content' && value !== defaultValue) {
			str += getSingleStr(key, value);
		}
	});
	return str;
}

// 拼接独立含classname的样式
function renderCss(styles, className) {
	css += `.${className} {`;

	Object.keys(styles).forEach(key => {
		const __key = key.replace(reg, '-$1').toLowerCase();

		const value = styles[key].replace(reg2, (result, $1) => {
			return `${parseInt($1, 10) * 2}px`;
		});
		css += `${__key}: ${value};`;
	});
	css += '}';
}

// 生成行内样式
function renderInlineCss(styles) {
	let temp = '';
	const keys = Object.keys(styles);
	if (keys.length === 0) return temp;

	keys.forEach(key => {
		const __value = styles[key];
		if (!__value) return;

		temp += `${key}:`;
		if (reg2.test(__value)) {
			const value = __value.replace(reg2, (result, $1) => {
				const res = parseInt($1, 10) * 2;
				// eslint-disable-next-line
				return '${Taro.pxTransform(' + res + ', 750)}';
			});
			// eslint-disable-next-line
			temp += '`' + value + '`';
		} else {
			temp += `'${__value}'`;
		}
		temp += ',';
	});
	return ` style={{ ${temp.substring(0, temp.length - 1)} }}`;
}

function renderElementToJSX(data) {
	data.forEach(item => {
		types.push(item.type);

		const { className = '', ...styles } = item.styles;

		jsx += `<${item.type}`;

		if (className) {
			renderCss(styles, className);
			jsx += ` className="${className}"`;
		} else {
			jsx += renderInlineCss(styles);
		}

		jsx += renderProps(item.props, item.type);

		if (item.childrens || item.props?.content) {
			jsx += '>\n';
			const childrens = item.childrens ? renderElementToJSX(item.childrens) : '';
			jsx += item.props?.content ? item.props.content : childrens;
			jsx += `\n</${item.type}>\n`;
		} else {
			jsx += ' />\n';
		}
	});
	return '';
}

export default function renderJSONtoJSX(data) {
	// 清空数据
	types = [];
	jsx = '';
	css = '';

	renderElementToJSX(data);
	return {
		types: Array.from(new Set(types)).join(', '),
		jsx,
		css
	};
}
