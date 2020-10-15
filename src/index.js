/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:29:37
 * @Description [component demo]
 */

// third libs
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import 'cloud-react/cloud-react.css';

// owner libs

// components

// container
import Raw from './container/raw';
import Editor from './container/editor';
import Config from './container/config';

// css
import './style.less';

@observer
class App extends Component {

	render() {

		return (
			<section className="wrapper">
				<h1>可视化页面编辑器</h1>
				<section className="container">
					<Raw />
					<Editor />
					<Config />
				</section>
			</section>
		);
	}
}

export default App;
