const types = [];
let jsx = '';

function renderProps(props) {
	let str = '';
	let hasHandleCss = false;
	Object.keys(props).forEach(key => {
		if (key !== 'styles' && key !== 'otherStyle') {
			const value = props[key];
			if (typeof value === 'number' || typeof value === 'boolean') {
				str += ` ${key}={${value}}\n`;
			}
			if (typeof value === 'string' && !!value) {
				str += ` ${key}="${value}"\n`;
			}
		} else {
			if (hasHandleCss) return;

			hasHandleCss = true;

			const { styles } = props;
			let styleStr = '';

			if (Object.keys(styles).length) {
				Object.keys(styles).forEach(k => {
					if (styles[k]) {
						styleStr += `${k}: '${styles[k]}',`;
					}
				});

				if (props.otherStyle) {
					styleStr += props.otherStyle.replace(';', ',');
				}
				styleStr = styleStr.substr(0, styleStr.length - 1);
			}

			if (styleStr.length) {
				str += ` style={{${styleStr}}}\n`;
			}
		}
	});
	return str;
}

function renderElementToJSX(data) {
	data.forEach(item => {
		types.push(item.type);
		jsx += `<${item.type}`;
		jsx += renderProps(item.props);
		jsx += '>\n';
		const childrens = item.childrens ? renderElementToJSX(item.childrens) : '';
		jsx += item.props.content ? item.props.content : childrens;
		jsx += `\n</${item.type}>\n`;
	});
}

export default function renderJSONtoJSX(data) {
	renderElementToJSX(data);
	return { jsx, types };
}
