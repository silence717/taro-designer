export default function parseStyles(styles) {
	if (!styles) return {};
	return styles
		.split(';')
		.filter(style => style.split(':')[0] && style.split(':')[1])
		.map(style => [
			style
				.split(':')[0]
				.trim()
				.replace(/-./g, c => c.substr(1).toUpperCase()),
			style.split(':')[1].trim()
		])
		.reduce(
			(styleObj, style) => ({
				...styleObj,
				[style[0]]: style[1]
			}),
			{}
		);
}
