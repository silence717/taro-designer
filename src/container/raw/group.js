import React, { useState } from 'react';
import { Icon } from 'cloud-react';
import SourceBox from '../drag-drop/sourceBox';
import store from '../store';

export default function Raw(props) {
	const { text, opened, childs } = props;

	const [open, setOpen] = useState(opened);

	const handleDrag = (targetId, type) => {
		store.add(targetId, type);
	};

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<section className="raw-group">
			<div className="header" onClick={handleOpen}>
				<span>{text}</span>
				{open && <Icon type="down" />}
				{!open && <Icon type="up" />}
			</div>
			{open && (
				<div>
					{childs.map((item, index) => (
						<SourceBox key={index} type={item.value} item={item} onEndDrag={handleDrag}>
							<span className="raw-item">
								{item.name}&nbsp;&nbsp;&nbsp;{item.value}
							</span>
						</SourceBox>
					))}
				</div>
			)}
		</section>
	);
}
