/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:23:59
 * @Description [mock server config]
 */

// 标记连接本地环境或者其它
const host = '0.0.0.0';
const port = 1234;

const target = `http://${host}:${port}`;

module.exports = {
	host,
	port,
	target
};
