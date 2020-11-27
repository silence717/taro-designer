import React, { Component, createRef } from 'react';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button } from 'cloud-react';
import JSZip from 'jszip';

import Components, { CONFIGS } from '@components';
import { parseStyles, http, renderJSONtoJSX } from '@utils';

// import renderJSONtoJSX from '../../generator';

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
		store.setCurrentProps();
		store.setCurrentType(type);
	}

	renderContent(data) {
		const { id, type, props = {}, childrens } = data;
		const CurrentComponet = Components[type];
		const {
			canPlace,
			defaultProps: { styles: defaultStyle, ...othersDefaultProps }
		} = CONFIGS[type];

		const { styles = defaultStyle, ...others } = props;
		const style = parseStyles(styles);

		// 为当前选中正在编辑的设置高亮
		// if (id === store.currentId) {
		// 	Object.assign(style, { background: '#f6f7ff' });
		// }

		const newProps = { ...othersDefaultProps, ...others };

		let childs = null;
		if (childrens && childrens.length) {
			childs = childrens.map(child => this.renderContent(child));
		}

		if (canPlace) {
			return (
				<TargetBox key={id} id={id} type={type} style={style} {...newProps} onClick={event => this.handleClick({ id, type }, event)}>
					{childs}
				</TargetBox>
			);
		}

		return (
			<CurrentComponet key={id} id={id} style={style} {...newProps} onClick={event => this.handleClick({ id, type }, event)}>
				{childs}
			</CurrentComponet>
		);
	}

	handleDownload = async () => {
		const { types, jsx, css } = renderJSONtoJSX(store.pageData);

		const { data } = await http.post('/download', {
			types,
			contents: jsx,
			css
		});
		const zip = new JSZip();
		await zip.loadAsync(data, { base64: true });
		const blob = await zip.generateAsync({ type: 'blob' });
		const url = window.URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.setAttribute('href', url);
		link.setAttribute('download', 'code.zip');
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	render() {
		return (
			<section className="editor">
				<header>页面编辑区</header>
				{this.isShowPlaceholder && <div className="tips">设计区，可拖拽左侧元素到此处，单击元素可编辑属性，蓝色虚线框可放置子组件</div>}
				<div className="operate">
					<Button type="primary" onClick={this.handleDownload}>
						下载源代码
					</Button>
				</div>
				<div className="edit" ref={this.ref}>
					{this.renderContent(store.pageData[0])}
				</div>
			</section>
		);
	}
}

export default Editor;
