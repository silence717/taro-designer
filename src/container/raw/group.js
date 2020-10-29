import React from 'react';
import SourceBox from './sourceBox';
import store from '../store';

export default function Raw(props) {
	const handleDrag = (targetId, type) => {
		store.add(targetId, type);
	};

	return (
		<section className="raw-group">
			<header>
				<span>{props.text}</span>
			</header>
			<div>
				{props.value.map((item, index) => (
					<SourceBox key={index} type={item} value={item} onEndDrag={handleDrag} />
				))}
			</div>
		</section>
	);
}
