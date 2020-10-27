import React from 'react';
import SourceBox from './sourceBox';

export default function Raw(props) {
	const onAdd = () => {
		console.log('add component');
	};

	return (
		<section className="raw-group">
			<header>
				<span>{props.text}</span>
			</header>
			<div>
				{props.value.map((item, index) => (
					<SourceBox key={index} type={item} value={item} onEndDrag={onAdd} />
				))}
			</div>
		</section>
	);
}
