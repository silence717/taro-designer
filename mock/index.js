/*
 * @Author: fang.yang
 * @Date: 2019-10-31 16:24:15
 * @Description [mock data entry]
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

fs.readdirSync('mock').forEach(route => {

	if (route.indexOf('index') === -1) {
		require(`./${route}`)(router);
	}
});

module.exports = router;
