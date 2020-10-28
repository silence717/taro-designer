import { observable } from 'mobx';
import { CONFIGS } from '@components';

// 根据当前组件的id递归查找页面数据中与之匹配的props
function findData(data, key) {
	let res = null;

	if (data && data.length) {
		for (let i = 0; i < data.length; i += 1) {
			const item = data[i];

			if (item.id === key) {
				res = item.props;
				break;
			} else {
				res = findData(item.childrens, key);
			}
		}
	}
	return res;
}

// 根据当前组件的id查找并且替换当前页面的数据
function findAndReplace(data, key, values) {
	if (data && data.length) {
		for (let i = 0; i < data.length; i += 1) {
			const item = data[i];

			if (item.id === key) {
				item.props = values;
				break;
			} else {
				findAndReplace(item.childrens, key, values);
			}
		}
	}
}
// 初始化页面数据
const initPageData = [
	{
		id: '1',
		type: 'View',
		props: {
			styles: {
				minHeight: '200px',
				margin: '10px'
			}
		},
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
	currentConfig = null;

	@observable
	pageData = JSON.parse(localStorage.getItem('cacheData')) || initPageData;

	setCurrentId(value) {
		this.currentId = value;
		this.setCurrentProps();
	}

	setCurrentProps() {
		const item = findData(this.pageData, this.currentId);
		this.currentProps = item;
	}

	setCurrentType(value) {
		this.currentType = value;
		this.setCurrentConfig();
	}

	setCurrentConfig() {
		this.currentConfig = CONFIGS[this.currentType];
	}

	updatePageData(values) {
		findAndReplace(this.pageData, this.currentId, values);
		localStorage.setItem('cacheData', JSON.stringify(this.pageData));
	}
}

export default new Store();
