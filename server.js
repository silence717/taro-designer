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
const configPath = path.join(__dirname, './.prettierrc');

const templateContent =
	"import React, { Component } from 'react';\nimport Taro from '@tarojs/taro';\nimport { generateComponents } from '@tarojs/components';\n\nimport styles from './index.less';\nclass TemplateComponent extends Component {\nrender() {\nreturn JSONtoJsx;\n}\n}\n\nexport default TemplateComponent;";
const options = { encoding: 'utf8' };

app.post('/api/download', (req, res) => {
	res.setHeader('Content-Type', 'application/zip');

	fs.truncateSync(jsxPath);
	fs.truncateSync(cssPath);

	const zip = new JSZip();
	const folder = zip.folder('code');

	const { types, contents, css } = req.body;

	const targetTemplate = templateContent
		.toString()
		.replace('generateComponents', types)
		.replace('JSONtoJsx', contents);

	function wirteFile() {
		return new Promise((resolve, reject) => {
			prettier.resolveConfig(configPath).then(() => {
				const content = prettier.format(targetTemplate, Object.assign(options, { parser: 'babel' }));

				fs.writeFileSync(jsxPath, content, options, error => {
					if (error) {
						console.log(error);
						throw error;
					}
				});
			});

			prettier.resolveConfig(configPath).then(() => {
				const content = prettier.format(css, Object.assign(options, { parser: 'less' }));

				fs.writeFileSync(cssPath, content, options, error => {
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
		folder.file('taro.jsx', fs.readFileSync(jsxPath, options));
		folder.file('index.less', fs.readFileSync(cssPath, options));

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
