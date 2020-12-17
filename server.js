/*
 * @Author: fang.yang
 * @Date: 2020-12-15 17:25:20
 * @Description [node server]
 */
const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const prettier = require('prettier');
const app = express();

const { host, port } = require('./server-config');
const { func } = require('prop-types');

app.use(bodyParser.json());

const jsxPath = path.join(__dirname, './output/taro.jsx');
const cssPath = path.join(__dirname, './output/index.less');
const configPath = path.join(__dirname, './.prettierrc');

const option = { encoding: 'utf8' };

app.post('/api/format', (req, res) => {
	let jsxRes = '';
	let cssRes = '';

	const { jsx, css } = req.body;
	console.log(jsx, css);

	function format() {
		return new Promise((resolve, reject) => {
			prettier.resolveConfig(configPath).then(options => {
				jsxRes = prettier.format(jsx, Object.assign(options, { parser: 'babel' }));
			});

			prettier.resolveConfig(configPath).then(options => {
				cssRes = prettier.format(css, Object.assign(options, { parser: 'less' }));
				resolve();
			});
		});
	}

	format().then(() => {
		res.status(200).json({ jsxRes, cssRes });
	});
});

app.post('/api/download', (req, res) => {
	res.setHeader('Content-Type', 'application/zip');

	fs.truncateSync(jsxPath);
	fs.truncateSync(cssPath);

	const zip = new JSZip();
	const folder = zip.folder('code');

	const { contents, css } = req.body;

	function wirteFile() {
		return new Promise((resolve, reject) => {
			prettier.resolveConfig(configPath).then(options => {
				const content = prettier.format(contents, Object.assign(options, { parser: 'babel' }));

				fs.writeFileSync(jsxPath, content, option, error => {
					if (error) {
						console.log(error);
						throw error;
					}
				});
			});

			prettier.resolveConfig(configPath).then(options => {
				const content = prettier.format(css, Object.assign(options, { parser: 'less' }));

				fs.writeFileSync(cssPath, content, option, error => {
					if (error) {
						console.log(error);
						throw error;
					}
				});
				resolve();
			});
		});
	}

	wirteFile().then(() => {
		folder.file('taro.jsx', fs.readFileSync(jsxPath, option));
		folder.file('index.less', fs.readFileSync(cssPath, option));

		zip.generateAsync({ type: 'base64' }).then(content => {
			res.status(200).send(content);
		});
	});
});

app.listen(port, host, err => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(' ============================== ');
	console.log(`GOD BLESS ME ~  Mock server listening at http://${host}:${port}`);
	console.log(' ============================== ');
});
