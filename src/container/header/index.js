import React, { Component } from 'react';
import { observer } from 'mobx-react';
import logo from '../../assets/images/favicon.png';

import './style.less';

@observer
class Header extends Component {
	render() {
		return (
			<header className="header">
				<img className="logo" src={logo} height="35" alt="shuyun" />
				<span className="name">可视化页面编辑器</span>
			</header>
		);
	}
}

export default Header;
