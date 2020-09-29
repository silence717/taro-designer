import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './style.less';

@observer
class User extends Component {
	render() {
		const { avatar, name, age } = this.props.user;

		return (
			<div className="user">
				<img src={avatar} alt="avatar" />
				<div className="info">
					<div>Name: {name}</div>
					<div>Age: forever {age}</div>
				</div>
			</div>
		);
	}
}

export default User;
