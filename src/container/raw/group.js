import React from 'react';
import SourceBox from '../drag-drop/sourceBox';
import store from '../store';

export default function Raw(props) {
	const handleDrag = (targetId, type) => {
		store.add(targetId, type);
	};

	return (
		<section className="raw-group">
			<div className="header">
				<span>{props.text}</span>
			</div>
			<div>
				{props.childs.map((item, index) => (
					<SourceBox key={index} type={item.value} item={item} onEndDrag={handleDrag}>
						<span className="raw-item">
							{item.name}&nbsp;&nbsp;&nbsp;{item.value}
						</span>
					</SourceBox>
				))}
			</div>
		</section>
	);
}
