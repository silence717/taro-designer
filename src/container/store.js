import { observable } from 'mobx';

class Store {

	@observable
	currentId = '';

	@observable
	currentType = '';

	@observable
	pageData = [{
		id: '1',
		type: 'View',
		name: 'view布局',
		canPlace: true,
		props: {
			style: {
				minHeight: '200px',
			}
		},
		childrens: [
			{
				id: '1-1',
				type: 'Button',
				props: {
					text: '按钮一枚',
					theme: 'primary',
					size: 'large'
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
			}
		]
	}];

	setCurrentType(value) {
		this.currentType = value;
	}

	setCurrentId(value) {
		this.currentId = value;
	}

	setPageData(value) {
		this.pageData = value;
	}

}


export default new Store();

