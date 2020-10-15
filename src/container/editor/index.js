import React, { Component, createRef } from 'react';
import { observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

import Button from '../../components/Button';

import  store from '../store';

import './style.less';

@observer
class Editor extends Component {


	@observable
	ref = createRef();

	@computed
	get isShowPlaceholder () {
		if (this.ref.current) {
			return this.ref.current.children.length === 0;
		}
		return false;
	}

	@action.bound
	handleClick(event) {
		console.log(event, event.currentTarget);
		store.setCurrentType('Button');
		store.setCurrentProps({
			text: '按钮一枚',
			theme: 'primary',
			size: 'large'
		});
	}

	render () {

		return (
			<section className="editor">
				<div>
					{ this.isShowPlaceholder && <div className="tips">设计区，可拖拽左侧元素到此处，单击元素可编辑属性，蓝色虚线框可放置子组件</div> }
					<div className="draggable" ref={this.ref}>
						<Button onClick={this.handleClick} componentname="Button" {...store.currentProps} />
					</div>
				</div>
			</section>
		)
	}
}

export default Editor;
