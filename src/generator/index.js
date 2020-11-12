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

		if (key !== 'content' && key !== 'styles' && value !== defaultValue) {
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

function renderCss(props) {
	if (!props) return;
	const { styles = '', className = '' } = props;
	if (styles && className) {
		css += `.${props.className} {\n${props.styles}\n}`;
	}
}

function renderElementToJSX(data) {
	data.forEach(item => {
		types.push(item.type);
		renderCss(item.props);
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
