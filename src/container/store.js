import { observable } from 'mobx';
import { CONFIGS } from '@components';
import { KEY, DEFAULT_VALUE } from '../constant';

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

// 递归处理chiils里面的id
function getChilds(data, id) {
	if (!data) return [];

	function loop(newData, parentId) {
		if (!newData) return [];

		return newData.map((item, index) => {
			const newId = `${parentId}-${index + 1}`;
			const childs = loop(item.childrens, newId);

			return {
				...item,
				id: newId,
				childrens: childs
			};
		});
	}

	return loop(data, id);
}

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
	pageData = JSON.parse(localStorage.getItem(KEY)) || DEFAULT_VALUE;

	setCurrentData(id, type) {
		const item = findItem(this.pageData, id);
		this.currentId = id;
		this.currentType = type;
		this.currentProps = item.props;
		this.currentStyles = item.styles || {};
	}

	// 更新配置数据
	updatePageData(values) {
		const item = findItem(this.pageData, this.currentId);
		item.props = values;
		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	// 更新样式配置
	updatePageStyle(values) {
		const item = findItem(this.pageData, this.currentId);
		item.styles = values;
		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	clearCurrentData() {
		this.currentId = '';
		this.currentType = '';
		this.currentProps = {};
		this.currentStyles = {};
	}

	reset() {
		this.clearCurrentData();
		this.pageData = DEFAULT_VALUE;
		localStorage.setItem(KEY, JSON.stringify(DEFAULT_VALUE));
	}

	// 拖拽增加新元素
	add(targetId, type) {
		const item = findItem(this.pageData, targetId);
		const obj = {
			type,
			props: CONFIGS[type].defaultProps || {},
			styles: CONFIGS[type].defaultStyles || {}
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

		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	// 删除元素
	removeElement() {
		const parentId = this.currentId.substring(0, this.currentId.lastIndexOf('-'));
		const item = findItem(this.pageData, parentId);
		const index = item.childrens.findIndex(child => child.id === this.currentId);
		item.childrens.splice(index, 1);
		this.clearCurrentData();
		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	// 复制元素
	copyElement() {
		const parentId = this.currentId.substring(0, this.currentId.lastIndexOf('-'));
		const parentItem = findItem(this.pageData, parentId);
		const currentItem = findItem(this.pageData, this.currentId);

		const newId = `${parentId}-${parentItem.childrens.length + 1}`;
		const { canPlace = false, type, childrens, props, styles } = currentItem;

		const childs = getChilds(childrens, newId);

		const item = {
			id: newId,
			type,
			canPlace,
			childrens: childs,
			props,
			styles
		};

		parentItem.childrens.push(item);

		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}
}

export default new Store();
