/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:28:34
 * @Description [common http request config]
 */
import axios from 'axios';

const http = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? process.env.SERVICE_URL : '/api',
	headers: {
		'Cache-Control': 'no-cache',
	},
});

export default http;
