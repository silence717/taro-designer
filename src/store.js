/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:31:35
 * @Description [data transfer logic]
 */
import { observable } from 'mobx';
import Loader from './loader';

export default class Store {
	loader = new Loader();

	@observable.shallow
	userMap = new Map();

	async fetchUserById(id) {
		const data = await this.loader.fetchUserById(id);
		this.userMap.set(id, data);
	}
}
