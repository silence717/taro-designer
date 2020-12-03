import { CONFIGS } from '@components';

const types = [];
let jsx = '';
let css = '';

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

function renderCss(styles, currentType) {
	let str = '';
	if (!styles) return str;

	const { className, ...others } = styles;
	str += `.${className} {`;

	Object.keys(others).forEach(key => {
		const value = styles[key];
		const defaultValue = CONFIGS[currentType].defaultStyles[key];
		if (value !== defaultValue) {
			str += `${key}: ${value};`;
		}
	});
	str += '}';

	return str;
}

function renderElementToJSX(data) {
	data.forEach(item => {
		types.push(item.type);
		css += renderCss(item.styles, item.type);
		jsx += `<${item.type}`;
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
