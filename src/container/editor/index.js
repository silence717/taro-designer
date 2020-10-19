import React, { Component, createRef } from 'react';
import { observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';

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
	handleClick({ id, type, config }) {
		console.log(id);
		store.setCurrentType(type);
		store.setCurrentProps(config);
	}

	renderContent() {
		const { id, type, config } = store.pageData;
		const RootComponet = Components[type];
		return <RootComponet id={id} {...config} {...store.currentProps} onClick={() => this.handleClick({ id, type, config }) } />;
	}

	render () {

		return (
			<section className="editor">
				<div>
					{ this.isShowPlaceholder && <div className="tips">设计区，可拖拽左侧元素到此处，单击元素可编辑属性，蓝色虚线框可放置子组件</div> }
					<div className="draggable" ref={this.ref}>
						{ this.renderContent() }
					</div>
				</div>
			</section>
		)
	}
}

export default Editor;
