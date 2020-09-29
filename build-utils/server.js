/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:25:20
 * @Description [mock server]
 */
const path = require('path');
const server = require('json-mock-kuitos');
const mockRouter = require('../mock/index');
const app = server.create();

const { isLocal, host, port } = require('./config');

if (isLocal) {

	app.use(mockRouter);

	app.listen(port, host, err => {

		if (err) {
			console.log(err);
			return;
		}

		console.log(' ============================== ');
		console.log(`GOD BLESS ME ~  Mock server listening at http://${host}:${port}`);
		console.log(' ============================== ');
	});

}
