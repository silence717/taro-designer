const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const prettier = require('prettier');

const sourcePath = path.join(__dirname, '../src/assets/tpls/template.jsx');
const jsxPath = path.join(__dirname, '../output/taro.jsx');
const cssPath = path.join(__dirname, '../output/index.less');

module.exports = router => {
	router.post('/download', (req, res) => {
		fs.truncateSync(jsxPath);
		fs.truncateSync(cssPath);

		const zip = new JSZip();
		const folder = zip.folder('code');

		const options = { encoding: 'utf8' };
		const { types, contents, css } = req.body;

		const template = fs.readFileSync(sourcePath);
		const targetTemplate = template
			.toString()
			.replace('generateComponents', types)
			.replace('JSONtoJsx', contents);

		const configPath = path.join(__dirname, '../.prettierrc');

		prettier.resolveConfig(configPath).then(options => {
			const content = prettier.format(targetTemplate, Object.assign(options, { parser: 'babel' }));

			fs.writeFileSync(jsxPath, content, options, error => {
				if (error) {
					console.log(error);
					throw error;
				}
			});
		});
		prettier.resolveConfig(configPath).then(options => {
			const content = prettier.format(css, Object.assign(options, { parser: 'less' }));

			fs.writeFileSync(cssPath, content, options, error => {
				if (error) {
					console.log(error);
					throw error;
				}
			});
		});

		res.setHeader('Content-Type', 'application/zip');

		folder.file('taro.jsx', fs.readFileSync(jsxPath));
		folder.file('index.less', fs.readFileSync(cssPath));

		zip.generateAsync({ type: 'base64' }).then(content => {
			res.status(200).send(content);
		});
	});
};
