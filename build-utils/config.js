/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:23:59
 * @Description [mock server config]
 */

 // 标记连接本地环境或者其它
const isLocal = true;
const host = '127.0.0.1';
const port = 3000;

const target = isLocal ? `http://${host}:${port}` : '';

module.exports = {
	isLocal,
	host,
	port,
	target
};
