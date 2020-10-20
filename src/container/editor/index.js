import React, { Component, createRef } from 'react';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

import Components from '../../components';

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
	handleClick({ id, type }) {
		store.setCurrentId(id);
		store.setCurrentType(type);
	}

	renderContent(data) {

		const { id, type, props, childrens } = data;
		const CurrentComponet = Components[type];
		let childs = null;

		if (childrens && childrens.length) {
			childs = childrens.map(child => (
				this.renderContent(child)
			));
		}

		return <CurrentComponet {...props} key={id} onClick={ () => this.handleClick({ id, type }) }>{ childs }</CurrentComponet>;
	}

	render () {

		const content = this.renderContent(store.pageData[0]);

		return (
			<section className="editor">
				<>
					{ this.isShowPlaceholder && <div className="tips">设计区，可拖拽左侧元素到此处，单击元素可编辑属性，蓝色虚线框可放置子组件</div> }
					<div className="draggable" ref={this.ref}>
						{ content }
					</div>
				</>
			</section>
		)
	}
}

export default Editor;
