import React from 'react';
import { DropTarget } from 'react-dnd';

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

function Box(props) {
	const { connectDropTarget, isOver, canDrop, children } = props;
	const isActive = canDrop && isOver;

	return connectDropTarget(<div className={`draggable ${isActive ? 'active' : ''}`}>{children}</div>);
}

export default DropTarget('Card', target, collect)(Box);
