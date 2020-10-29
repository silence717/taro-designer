import React, { Component, createRef } from 'react';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

import Components, { CONFIGS } from '@components';

import store from '../store';

import TargetBox from './targetBox';

import './style.less';

@observer
class Editor extends Component {
	@observable
	ref = createRef();

	@computed
	get isShowPlaceholder() {
		if (this.ref.current) {
			return this.ref.current.children.length === 0;
		}
		return false;
	}

	@action.bound
	handleClick({ id, type }, event) {
		event.stopPropagation();
		store.setCurrentId(id);
		store.setCurrentType(type);
	}

	renderContent(data) {
		const { id, type, props = {}, childrens } = data;
		const { styles = {}, ...others } = props;

		const CurrentComponet = Components[type];

		let childs = null;

		if (childrens && childrens.length) {
			childs = childrens.map(child => this.renderContent(child));
		}

		const canDrop = CONFIGS[type].canPlace === true;

		if (canDrop) {
			return (
				<TargetBox
					key={id}
					id={id}
					canDrop={canDrop}
					type={type}
					style={{ ...styles }}
					{...others}
					onClick={event => this.handleClick({ id, type }, event)}>
					{childs}
				</TargetBox>
			);
		}

		return (
			<CurrentComponet style={{ ...styles }} {...others} key={id} onClick={event => this.handleClick({ id, type }, event)}>
				{childs}
			</CurrentComponet>
		);
	}

	render() {
		return (
			<section className="editor">
				{this.isShowPlaceholder && <div className="tips">设计区，可拖拽左侧元素到此处，单击元素可编辑属性，蓝色虚线框可放置子组件</div>}
				<div ref={this.ref}>{this.renderContent(store.pageData[0])}</div>
			</section>
		);
	}
}

export default Editor;
