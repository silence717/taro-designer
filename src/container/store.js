import { observable } from 'mobx';
import { CONFIGS } from '@components';

// 递归查找当前 id 的数据
function findItem(dataList, id) {
	let result = null;
	dataList.forEach(item => {
		// eslint-disable-next-line
		const loop = data => {
			if (data.id === id) {
				result = data;
				return result;
			}

			const childs = data.childrens;

			if (childs) {
				for (let i = 0; i < childs.length; i += 1) {
					loop(childs[i]);
				}
			}
		};

		loop(item);
	});

	return result;
}

// 初始化页面数据
const initPageData = [
	{
		id: '1',
		type: 'View',
		props: {},
		styles: {},
		childrens: []
	}
];

class Store {
	@observable
	currentId = '';

	@observable
	currentType = '';

	@observable
	currentProps = {};

	@observable
	currentStyles = {};

	@observable
	pageData = JSON.parse(localStorage.getItem('cacheData')) || initPageData;

	setCurrentId(value) {
		this.currentId = value;
	}

	setCurrentConfig() {
		const item = findItem(this.pageData, this.currentId);
		this.currentProps = item.props;
		this.currentStyles = item.styles || {};
	}

	setCurrentType(value) {
		this.currentType = value;
	}

	// 更新配置数据
	updatePageData(values) {
		const item = findItem(this.pageData, this.currentId);
		item.props = values;
		localStorage.setItem('cacheData', JSON.stringify(this.pageData));
	}

	// 更新样式配置
	updatePageStyle(values) {
		const item = findItem(this.pageData, this.currentId);
		item.styles = values;
		this.currentStyles = values;
		localStorage.setItem('cacheData', JSON.stringify(this.pageData));
	}

	add(targetId, type) {
		const item = findItem(this.pageData, targetId);
		const obj = {
			type,
			props: CONFIGS[type].props || {}
		};

		if (item.childrens) {
			const len = item.childrens.length;
			const id = `${item.id}-${len + 1}`;
			obj.id = id;
			item.childrens.push(obj);
		} else {
			obj.id = `${item.id}-1`;
			item.childrens = [obj];
		}

		localStorage.setItem('cacheData', JSON.stringify(this.pageData));
	}

	reset() {
		this.currentId = '';
		this.currentType = '';
		this.currentProps = {};
		this.currentStyles = {};
		this.pageData = initPageData;
		localStorage.setItem('cacheData', JSON.stringify(initPageData));
	}

	remove() {
		// this.pageData.forEach(item => {
		// 	const loop = data => {
		// 		if (data.id === id) {
		// 			result = data;
		// 			return result;
		// 		}
		// 		const childs = data.childrens;
		// 		if (childs) {
		// 			for (let i = 0; i < childs.length; i += 1) {
		// 				loop(childs[i]);
		// 			}
		// 		}
		// 	};
		// 	loop(item);
		// });
	}
}

export default new Store();
