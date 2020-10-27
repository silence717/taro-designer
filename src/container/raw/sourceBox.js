import React from 'react';
import { DragSource } from 'react-dnd';

const source = {
	beginDrag(props) {
		console.log(props);
		return {
			type: props.type
		};
	},

	endDrag(props, monitor) {
		const item = monitor.getItem();
		const result = monitor.getDropResult();
		console.log(item, result);

		if (result) {
			props.onEndDrag(item.type);
		}
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

function Single(props) {
	const { connectDragSource } = props;

	return connectDragSource(<span className="raw-item">{props.value}</span>, { dropEffect: 'copy' });
}

export default DragSource('Card', source, collect)(Single);
