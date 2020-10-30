/*
 * @Author: fang.yang
 * @Date: 2019-10-31 17:29:37
 * @Description [component demo]
 */

// third libs
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { applyPolyfills, defineCustomElements } from '@tarojs/components/loader';

import '@tarojs/components/dist/taro-components/taro-components.css';
import 'cloud-react/cloud-react.css';

// owner libs

// components

// container
import Raw from './container/raw';
import Editor from './container/editor';
// import TargetBox from './container/editor/targetBox';
import Config from './container/config';

// css
import './style.less';

// 解决在非 taro 项目中使用 tarojs/component 组件导致的web component定义失效问题
applyPolyfills().then(() => {
	defineCustomElements(window);
});

@observer
class App extends Component {
	render() {
		return (
			<section className="wrapper">
				<h1>可视化页面编辑器</h1>
				<section className="container">
					<DndProvider backend={HTML5Backend}>
						<Raw />
						<Editor />
						<Config />
					</DndProvider>
				</section>
			</section>
		);
	}
}
export default App;
