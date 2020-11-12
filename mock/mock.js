const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../src/generator/template.jsx');
const targetPath = path.join(__dirname, '../output/taro.jsx');
const cssPath = path.join(__dirname, '../output/index.less');

module.exports = router => {
	router.post('/generate', (req, res) => {
		const options = { encoding: 'utf8' };
		const { types, contents, css } = req.body;

		const template = fs.readFileSync(sourcePath);
		const targetTemplate = template
			.toString()
			.replace('generateComponents', types)
			.replace('JSONtoJsx', contents);

		fs.writeFileSync(targetPath, targetTemplate, options, error => {
			if (error) {
				console.log(error);
				throw error;
			}
		});

		fs.writeFileSync(cssPath, css, options, error => {
			if (error) {
				console.log(error);
				throw error;
			}
		});

		res.status(200).json({ res: 'ok' });

	});
};
