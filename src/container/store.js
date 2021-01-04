import { observable } from 'mobx';
import { CONFIGS } from '@components';
import { KEY, DEFAULT_VALUE } from '../constant';

// 存储现有id
let ids = [];
// 生成 id
function generateId() {
	const id = Math.ceil(Math.random() * 10000);
	if (ids.includes(id)) {
		return generateId();
	}
	ids.push(id);
	return id;
}

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
function getChilds(data) {
	if (!data) return [];

	function loop(newData) {
		if (!newData) return [];

		return newData.map(item => {
			const newId = generateId();
			const childs = loop(item.childrens);

			return {
				...item,
				id: newId,
				childrens: childs
			};
		});
	}

	return loop(data);
}

// 获取已有的id集合
function getIds(data) {
	const res = [];

	(function flat(array) {
		array.forEach(item => {
			res.push(item.id);
			if (item.childrens) {
				flat(item.childrens);
			}
		});
	})(data);

	return res;
}

class Store {
	@observable
	currentId = '';

	@observable
	currentParentId = '';

	@observable
	currentType = '';

	@observable
	currentProps = {};

	@observable
	currentStyles = {};

	@observable
	pageData = DEFAULT_VALUE;

	constructor() {
		if (localStorage.getItem(KEY)) {
			this.pageData = JSON.parse(localStorage.getItem(KEY));
		}
		ids = getIds(this.pageData);
	}

	setCurrentData(id, parentId, type) {
		const item = findItem(this.pageData, id);
		this.currentId = id;
		this.currentParentId = parentId;
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
			id: generateId(),
			type,
			props: CONFIGS[type].defaultProps || {},
			styles: CONFIGS[type].defaultStyles || {}
		};

		if (item.childrens) {
			item.childrens.push(obj);
		} else {
			item.childrens = [obj];
		}

		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	/**
	 * 删除节点
	 * @param {*} removeId 被删除节点 id
	 * @param {*} parentId 被删除节点的父节点 id
	 */
	removeNode(removeId, parentId) {
		const item = findItem(this.pageData, parentId);
		const index = item.childrens.findIndex(child => child.id === removeId);

		item.childrens.splice(index, 1);
		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	// 删除元素
	removeElement() {
		this.removeNode(this.currentId, this.currentParentId);
		this.clearCurrentData();
	}

	// 复制元素
	copyElement() {
		const parentItem = findItem(this.pageData, this.currentParentId);
		const currentItem = findItem(this.pageData, this.currentId);

		const { type, childrens, props, styles } = currentItem;
		const newId = generateId();

		const childs = getChilds(childrens);

		const item = {
			id: newId,
			type,
			childrens: childs,
			props,
			styles
		};

		parentItem.childrens.push(item);

		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}

	move(dragItem, overItem) {
		const { draggedId, dragParentId } = dragItem;
		const { overId, overType, overParentId } = overItem;

		const item = { ...findItem(this.pageData, draggedId) };
		const target = findItem(this.pageData, overParentId);

		// 目标元素是否为可放置元素
		const { canPlace } = CONFIGS[overType];
		// 如果是可放置元素，直接push到当前的 over元素中去
		if (canPlace) {
			const __overItem = findItem(this.pageData, overId);

			if (__overItem.childrens) {
				__overItem.childrens.push(item);
			} else {
				__overItem.childrens = [item];
			}
			this.removeNode(draggedId, dragParentId);
		} else {
			const index = target.childrens.findIndex(v => v.id === overId);
			this.removeNode(draggedId, dragParentId);
			target.childrens.splice(index, 0, item);
		}

		localStorage.setItem(KEY, JSON.stringify(this.pageData));
	}
}

export default new Store();
