/**
 * 动态生成 componets 下面的 index.js 文件
 */
const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

function getStringCodes() {
	const componentsDir = path.join(__dirname, '../src/components');
	const folders = fs.readdirSync(componentsDir);
	// ignore file
	const ignores = ['.DS_Store', 'index.js', 'Tips'];

	let importString = '';
	let requireString = '';
	let defaultString = 'export default {\n';
	let configString = 'export const CONFIGS = {\n';

	folders.forEach(folder => {
		if (!ignores.includes(folder)) {
			importString += `import ${folder} from './${folder}';\n`;
			requireString += `const ${folder.toLowerCase()}Config = require('./${folder}/config.json');\n`;
			defaultString += `${folder},\n`;
			configString += `${folder}: ${folder.toLowerCase()}Config,\n`;
		}
	});

	return { importString, requireString, defaultString, configString };
}

function generateFile() {
	const { importString, requireString, defaultString, configString } = getStringCodes();

	const code = `${importString}\n${requireString}\n${defaultString}\n};\n\n${configString}\n};\n`;

	const configPath = path.join(__dirname, '../.prettierrc');

	prettier.resolveConfig(configPath).then(options => {
		const content = prettier.format(code, Object.assign(options, { parser: 'babel' }));
		const targetFilePath = path.join(__dirname, '../src/components/index.js');

		fs.writeFileSync(targetFilePath, content, error => {
			if (error) {
				console.log(error);
			}
		});
	});
}

generateFile();
