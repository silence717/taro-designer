import React from 'react';
import { DropTarget } from 'react-dnd';

const target = {
	canDrop(props) {
		const { canDrop } = props;
		return typeof canDrop === 'function' ? canDrop() : true;
	}
};

function collect(connect, monitor) {
	// console.log(monitor);
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

function Box(props) {
	const { connectDropTarget, isOver, canDrop } = props;
	const isActive = canDrop && isOver;

	return connectDropTarget(<div className={`draggable ${isActive ? 'active' : ''}`}>{props.children}</div>);
}

export default DropTarget('Card', target, collect)(Box);
