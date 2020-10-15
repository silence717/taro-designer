import React from 'react';
import { Tag } from 'cloud-react';


function Single(props) {
	return (
		<Tag>{props.value}</Tag>
	)
}


export default function Raw(props) {
	return (
		<>
			<section className="raw-group">
				<header>
					<span>{props.text}</span>
				</header>
				<div>
					{
						props.value.map((item, index) => (
							<Single key={index} value={item} />
						))
					}
				</div>
			</section>
		</>
	)
}
