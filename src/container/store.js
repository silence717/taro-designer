import { observable } from 'mobx';

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
				res = findData(item.childrens, key)
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
				findAndReplace(item.childrens, key, values)
			}
		}
	}
}

class Store {

	@observable
	currentId = '';

	@observable
	currentType = '';

	@observable
	currentProps = {};

	@observable
	pageData = [{
		id: '1',
		type: 'View',
		props: {
			styles: {
				minHeight: '200px',
				margin: '10px'
			}
		},
		childrens: [
			{
				id: '1-1',
				type: 'Button',
				props: {
					text: '按钮一枚',
					theme: 'primary',
					size: 'large',
					styles: {
						width: '200px',
						margin: '20px'
					}
				}
			},
			{
				id: '1-2',
				type: 'Button',
				props: {
					text: '按钮',
					theme: 'normal',
					size: 'default'
				}
			},
			{
				id: '1-3',
				type: 'View',
				props: {
					style: {
						minHeight: '100px',
						margin: '10px'
					}
				},
				childrens: [
					{
						id: '1-3-1',
						type: 'Button',
						props: {
							text: 'ok',
							theme: 'dashed',
							size: 'small'
						}
					}
				]
			}
		]
	}];

	setCurrentProps() {
		const item = findData(this.pageData, this.currentId);
		this.currentProps = item;
	}

	setCurrentType(value) {
		this.currentType = value;
	}

	setCurrentId(value) {
		this.currentId = value;
	}

	setPageData(value) {
		this.pageData = value;
	}

	updatePageData(values) {
		findAndReplace(this.pageData, this.currentId, values);
		localStorage.setItem('cacheData', JSON.stringify(this.pageData));
	}

}

export default new Store();
