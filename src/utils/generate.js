import { CONFIGS } from '@components';

const types = [];
let jsx = '';
let css = '';
const reg = /\B([A-Z])/g;
const reg2 = /([0-9]{1,})px+/g;

function renderProps(props, currentType) {
	let str = '';

	if (!props) return str;

	Object.keys(props).forEach(key => {
		const value = props[key];
		const defaultValue = CONFIGS[currentType].defaultProps[key];

		if (key !== 'content' && value !== defaultValue) {
			if (typeof value === 'number' || typeof value === 'boolean') {
				str += ` ${key}={${value}}`;
			}
			if (typeof value === 'string' && !!value) {
				str += ` ${key}="${value}"`;
			}
		}
	});
	return str;
}

// 拼接独立含classname的样式
function renderCss(finalStyle, className) {
	css += `.${className} {`;

	Object.keys(finalStyle).forEach(key => {
		const __key = key.replace(reg, '-$1').toLowerCase();

		const value = finalStyle[key].replace(reg2, (result, $1) => {
			return `${parseInt($1, 10) * 2}px`;
		});
		css += `${__key}: ${value};`;
	});
	css += '}';
}

// 生成行内样式
function renderInlineCss(finalStyle) {
	let temp = '';
	Object.keys(finalStyle).forEach(key => {
		const __value = finalStyle[key];
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
		jsx += '>\n';
		const childrens = item.childrens ? renderElementToJSX(item.childrens) : '';
		jsx += item.props?.content ? item.props.content : childrens;
		jsx += `\n</${item.type}>\n`;
	});
	return '';
}

export default function renderJSONtoJSX(data) {
	renderElementToJSX(data);
	return {
		types: Array.from(new Set(types)).join(', '),
		jsx,
		css
	};
}
