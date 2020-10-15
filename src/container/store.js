import { observable } from 'mobx';

class Store {

	@observable
	currentType = '';

	@observable
	currentProps = {};

	setCurrentType(value) {
		this.currentType = value;
	}

	setCurrentProps(value) {
		this.currentProps = value;
	}

}


export default new Store();

