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

app.use(bodyParser.json());

const jsxPath = path.join(__dirname, './output/taro.jsx');
const cssPath = path.join(__dirname, './output/index.less');

const formatOptions = {
	printWidth: 160,
	tabWidth: 4,
	arrowParens: 'avoid',
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'ignore',
	jsxBracketSameLine: true,
	singleQuote: true
};

app.post('/taro-designer-api/format', (req, res) => {
	let jsxRes = '';
	let cssRes = '';

	const { jsx, css } = req.body;

	function format() {
		return new Promise((resolve, reject) => {
			jsxRes = prettier.format(jsx, Object.assign(formatOptions, { parser: 'babel' }));
			cssRes = prettier.format(css, Object.assign(formatOptions, { parser: 'less' }));
			resolve();
		});
	}

	format()
		.then(() => {
			res.status(200).json({ jsxRes, cssRes });
		})
		.catch(() => {
			res.status(500).json({ msg: '抱歉出错了，请稍后重试～' });
		});
});

app.post('/taro-designer-api/download', (req, res) => {
	res.setHeader('Content-Type', 'application/zip');

	fs.truncateSync(jsxPath);
	fs.truncateSync(cssPath);

	const zip = new JSZip();
	const folder = zip.folder('code');

	const { contents, css } = req.body;

	function wirteFile() {
		return new Promise((resolve, reject) => {
			const jsxContent = prettier.format(contents, Object.assign(formatOptions, { parser: 'babel' }));

			fs.writeFileSync(jsxPath, jsxContent, { encoding: 'utf8' }, error => {
				if (error) {
					console.log(error);
					throw error;
				}
			});

			const cssContent = prettier.format(css, Object.assign(formatOptions, { parser: 'less' }));

			fs.writeFileSync(cssPath, cssContent, { encoding: 'utf8' }, error => {
				if (error) {
					console.log(error);
					throw error;
				}
			});
			resolve();
		});
	}

	wirteFile()
		.then(() => {
			folder.file('taro.jsx', fs.readFileSync(jsxPath, { encoding: 'utf8' }));
			folder.file('index.less', fs.readFileSync(cssPath, { encoding: 'utf8' }));

			zip.generateAsync({ type: 'base64' }).then(content => {
				res.status(200).send(content);
			});
		})
		.catch(() => {
			res.status(500).json({ msg: '下载出错了，请稍后重试～' });
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
