/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:32:13
 * @Description [fetch data from backend and format data to viewmodel]
 */
import http from './utils/https';

export default class Loader {
	http = http;

	async fetchUserById(id) {
		const { data } = await this.http.get(`/user/${id}`);
		return data;
	}
}
