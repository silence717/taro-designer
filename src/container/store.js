import { observable } from 'mobx';

class Store {

	@observable
	currentType = '';

	@observable
	currentProps = {};

	@observable
	pageData = {
		id: '1',
		type: 'Button',
		config: {
			text: '按钮一枚',
			theme: 'primary',
			size: 'large'
		},
		'children': []
	};

	setCurrentType(value) {
		this.currentType = value;
	}

	setCurrentProps(value) {
		this.currentProps = value;
	}

	setPageData(value) {
		this.pageData = value;
	}

}


export default new Store();

