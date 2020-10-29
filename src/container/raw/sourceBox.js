import React from 'react';
import { DragSource } from 'react-dnd';

const source = {
	beginDrag(props) {
		return {
			type: props.type
		};
	},

	endDrag(props, monitor) {
		const item = monitor.getItem();

		if (monitor.didDrop()) {
			props.onEndDrag(item.type);
		}

		const result = monitor.getDropResult();
		console.log(result);

		if (result) {
			props.onEndDrag(item.type);
		}
	}
};

function collect(connect) {
	return {
		connectDragSource: connect.dragSource()
	};
}

function Box(props) {
	const { connectDragSource, value } = props;

	return connectDragSource(<span className="raw-item">{value}</span>, { dropEffect: 'copy' });
}

export default DragSource('Card', source, collect)(Box);
