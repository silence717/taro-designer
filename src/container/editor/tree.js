import React, { Component } from 'react';
import Item from './item';

class Tree extends Component {
	render() {
		const { parentId, items, move } = this.props;

		return (
			<>
				{items.map(item => {
					return <Item parentId={parentId} key={item.id} item={item} move={move} />;
				})}
			</>
		);
	}
}

export default Tree;
