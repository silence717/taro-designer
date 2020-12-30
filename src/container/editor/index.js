import React, { Component } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Modal, Message } from 'cloud-react';
import store from '../store';
import Tree from './tree';

import './style.less';

@observer
class Editor extends Component {
	@action.bound
	handleReset() {
		Modal.confirm({
			isShowIcon: false,
			body: '确定清空当前页面吗？',
			onOk: () => {
				store.reset();
				Message.success('清空工作区成功');
			}
		});
	}

	@action.bound
	moveItem(id, afterId, nodeId) {
		store.move(id, afterId, nodeId);
	}

	render() {
		return (
			<section className="editor">
				<header>页面编辑区</header>
				<Button size="small" onClick={this.handleReset} style={{ margin: '10px 0' }}>
					清空工作区
				</Button>
				<div className="edit">
					<Tree parentId={null} items={store.pageData} move={this.moveItem} />
				</div>
			</section>
		);
	}
}

export default Editor;
