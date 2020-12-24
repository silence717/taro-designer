import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { DropTarget } from 'react-dnd';
import Components from '@components';

import './style.less';

const target = {
	canDrop(props, monitor) {
		// 被拖拽的组件类型
		const dragType = monitor.getItem().type;
		// 放置的组件类型
		const dropType = props.type;

		// SwiperItem 只可以放置在 Swiper 中
		if (dragType === 'SwiperItem') {
			return dropType === 'Swiper';
		}

		// 目标组件类型为 Label 时候，可放置的组件有 button, checkbox, radio, switch。
		if (dropType === 'Label') {
			const types = ['Button', 'Checkbox', 'Radio', 'Switch'];
			return types.indexOf(dragType) !== -1;
		}
		return true;
	},

	drop(props, monitor) {
		const didDrop = monitor.didDrop();

		if (didDrop && !props.greedy) {
			return undefined;
		}

		return {
			id: props.id
		};
	}
};

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver({ shallow: true }),
		canDrop: monitor.canDrop()
	};
}

class Box extends Component {
	render() {
		const { connectDropTarget, canDrop, isOver, className, children, type, ...rest } = this.props;
		const CurrentComponet = Components[type];
		const classes = classnames('draggable', className, {
			active: canDrop && isOver
		});

		return (
			<CurrentComponet
				className={classes}
				{...rest}
				ref={instance => {
					// eslint-disable-next-line
					const node = findDOMNode(instance);
					connectDropTarget(node);
				}}>
				{children}
			</CurrentComponet>
		);
	}
}

export default DropTarget('Card', target, collect)(Box);
