export default function parseStyles(styles) {
	const reg = /\B([A-Z])/g;

	let res = '';

	Object.keys(styles)
		.filter(item => item !== 'className')
		.forEach(key => {
			const __key = key.replace(reg, '-$1').toLowerCase();
			res += `${__key}:${styles[key]};`;
		});

	return res;
}
