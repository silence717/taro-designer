/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:29:37
 * @Description [component demo]
 */

// third libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

// owner libs
import Store from './store';

// components
import User from './user';

// css
import './style.less';

@observer
class Node extends Component {
	store = new Store();

	@observable
	amount = 1;

	@observable
	price = 10;

	userId = 1;

	defaultUser = {
		id: this.userId,
		age: 1,
		name: '',
		avatar: '',
	};

	componentDidMount() {
		this.store.fetchUserById(this.userId);
	}

	@computed
	get total() {
		return this.price * this.amount;
	}

	@computed
	get user() {
		const user = this.store.userMap.get(this.userId) || this.defaultUser;
		return user;
	}

	@action.bound
	handleAddClick() {
		this.amount += 1;
	}

	render() {
		const { title } = this.props;

		return (
			<div className="main">
				<div>
					<h4>{title}</h4>
					<h5>this is asynchronous data!</h5>
					<User user={this.user} />
				</div>

				<div>
					<h4>mobx practice</h4>
					数量为：{this.amount}
					总价格为：{this.total}
					<button type="button" onClick={this.handleAddClick}>
						数量加1
					</button>
				</div>
			</div>
		);
	}
}

Node.propTypes = {
	title: PropTypes.string,
};

Node.defaultProps = {
	title: '',
};

export default Node;
