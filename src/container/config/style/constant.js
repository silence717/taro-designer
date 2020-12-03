const properties = ['position', 'display', 'width', 'height', 'margin', 'padding', 'font-size', 'color', 'background', 'border'];

const styleConfigs = {
	position: {
		key: 'position',
		label: '位置',
		type: 'Select',
		dataSource: ['absolute', 'fixed', 'relative', 'static', 'sticky', 'inherit']
	},
	display: {
		key: 'display',
		label: '布局类型',
		type: 'Select',
		dataSource: ['block', 'flex', 'inline', 'inline-block', 'inline-flex', 'none']
	},
	width: {
		key: 'width',
		label: '宽度',
		type: 'Input'
	},
	height: {
		key: 'height',
		label: '高度',
		type: 'Input'
	},
	margin: {
		key: 'margin',
		label: '外边距',
		type: 'Spacing'
	},
	padding: {
		key: 'padding',
		label: '内边距',
		type: 'Spacing'
	},
	'font-size': {
		key: 'font-size',
		label: '字体大小',
		type: 'Input'
	},
	color: {
		key: 'color',
		label: '颜色',
		type: 'Color'
	},
	background: {
		key: 'background',
		label: '背景色',
		type: 'Color'
	},
	border: {
		key: 'border',
		label: '边框',
		type: 'Input'
	}
};

export { properties, styleConfigs };
