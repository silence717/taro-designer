import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import Components from '@components';

const target = {
	canDrop(props) {
		return props.canDrop;
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
		const { connectDropTarget, isOver, canDrop, type, children, ...rest } = this.props;
		const isActive = canDrop && isOver;
		const CurrentComponet = Components[type];

		return (
			<CurrentComponet
				className={`draggable ${isActive ? 'active' : ''}`}
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
