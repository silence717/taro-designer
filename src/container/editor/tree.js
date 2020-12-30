import React, { Component } from 'react';
import Item from './item';

class Tree extends Component {
	render() {
		const { items, move } = this.props;

		return (
			<>
				{items.map(item => {
					return <Item key={item.id} item={item} move={move} />;
				})}
			</>
		);
	}
}

export default Tree;
