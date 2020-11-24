const path = require('path');
const fs = require('fs');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('请输入组件名称？', name => {
	const componentName = name;
	readline.close();

	const targetPath = path.join(__dirname, '../src/components/');
	fs.mkdirSync(`${targetPath}${componentName}`);

	const componentPath = path.join(__dirname, `../src/components/${componentName}`);
	const regx = /__ComponentName__/gi

	const jsContent = fs.readFileSync(path.join(__dirname, '../scripts/tpl/index.js')).toString().replace(regx, componentName);
	const configContent = fs.readFileSync(path.join(__dirname, '../scripts/tpl/config.json')).toString().replace(regx, componentName);
	const options = { encoding: 'utf8' };


	fs.writeFileSync(`${componentPath}/index.js`, jsContent, options, error => {
		if (error) {
			console.log(error);
		}
	});

	fs.writeFileSync(`${componentPath}/config.json`, configContent, options, error => {
		if (error) {
			console.log(error);
		}
	});

});
