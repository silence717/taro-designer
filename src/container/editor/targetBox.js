import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { DropTarget } from 'react-dnd';
import Components from '@components';

const target = {
	canDrop(props, monitor) {
		if (monitor.getItem().type === 'SwiperItem') {
			return props.type === 'Swiper';
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
		const { connectDropTarget, canDrop, isOver, type, className, children, ...rest } = this.props;
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
