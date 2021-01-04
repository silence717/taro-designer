import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';
import Components, { CONFIGS } from '@components';
import { parseStyles } from '@utils';

import Tree from './tree';
import store from '../store';

const source = {
	beginDrag(props) {
		const { parentId, item } = props;
		const { id, type, childrens } = item;
		return {
			id,
			parentId,
			type,
			items: childrens
		};
	},

	canDrag(props) {
		if (props.item.id === 1) return false;
		return true;
	},

	isDragging(props, monitor) {
		return props.item.id === monitor.getItem().id;
	},

	endDrag(props, monitor) {
		const result = monitor.getDropResult();
		if (result.dragItem) {
			const { dragItem, overItem } = result;
			props.move(dragItem, overItem);
		}
	}
};

function sourceCollect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	};
}

const target = {
	canDrop(props, monitor) {
		// 被拖拽的组件类型
		const dragType = monitor.getItem().type;
		// 放置的组件类型
		const dropType = props.item.type;

		// SwiperItem 只可以放置在 Swiper 中
		if (dragType === 'SwiperItem') {
			return dropType === 'Swiper';
		}

		// Swiper 只可以放置 SwiperItem 子项
		if (dropType === 'Swiper') {
			return dragType === 'SwiperItem';
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

		if (didDrop) {
			return undefined;
		}

		const { id: draggedId, parentId: dragParentId } = monitor.getItem();
		const { parentId: overParentId } = props;
		const { id: overId, type: overType } = props.item;

		if (draggedId) {
			if (draggedId === overId || draggedId === overParentId || dragParentId === overId || overParentId === null) return undefined;
			return {
				dragItem: { draggedId, dragParentId },
				overItem: { overId, overType, overParentId }
			};
		}
		return { id: overId };
	}
};

function targetCollect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver({ shallow: true }),
		canDrop: monitor.canDrop()
	};
}
@observer
class Item extends Component {
	@action.bound
	handleClick({ id, parentId, type }, event) {
		event.stopPropagation();
		document.querySelectorAll('.highlight').forEach(element => {
			element.classList.remove('highlight');
		});
		document.getElementById(id).classList.add('highlight');
		store.setCurrentData(id, parentId, type);
	}

	render() {
		const { connectDropTarget, connectDragSource, canDrop, isOver, parentId, item, move } = this.props;

		const { id, type, props, styles, childrens } = item;
		const CurrentComponet = Components[type];
		const { canPlace, defaultProps } = CONFIGS[type];

		const finalProps = { ...defaultProps, ...props };

		const classes = classnames('', {
			draggable: canPlace,
			active: canDrop && isOver
		});

		return (
			<CurrentComponet
				id={id}
				type={type}
				className={classes}
				style={parseStyles(styles)}
				{...finalProps}
				ref={instance => {
					// eslint-disable-next-line
					const node = findDOMNode(instance);
					connectDragSource(node);
					connectDropTarget(node);
				}}
				onClick={event => this.handleClick({ id, parentId, type }, event)}>
				{childrens && childrens.length ? <Tree parentId={id} items={childrens} move={move} /> : null}
			</CurrentComponet>
		);
	}
}

export default DropTarget('ITEM', target, targetCollect)(DragSource('ITEM', source, sourceCollect)(Item));
