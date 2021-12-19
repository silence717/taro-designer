/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:28:34
 * @Description [common http request config]
 */
import axios from 'axios';

const http = axios.create({
	baseURL: 'https://ec2-18-217-104-59.us-east-2.compute.amazonaws.com:1234/taro-designer-api/',
	headers: {
		'Cache-Control': 'no-cache'
	}
});

export default http;
