import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { DropTarget } from 'react-dnd';
import Components from '@components';

const target = {
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
		isOver: monitor.isOver({ shallow: true })
	};
}

class Box extends Component {
	render() {
		const { connectDropTarget, isOver, type, className, children, ...rest } = this.props;
		const CurrentComponet = Components[type];
		const classes = classnames('draggable', className, {
			active: isOver
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
