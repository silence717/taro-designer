import React, { useState } from 'react';
import { Icon, Message } from 'cloud-react';
import SourceBox from './sourceBox';
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

	const handleAddClick = type => {
		if (type === 'SwiperItem') {
			Message.error('SwiperItem请手动拖拽到swiper中');
			return;
		}
		store.add(1, type);
	};

	const Item = ({ item }) => {
		return (
			<SourceBox type={item.value} item={item} onEndDrag={handleDrag}>
				<span
					className="raw-item"
					onClick={() => {
						handleAddClick(item.value);
					}}
					title={item.value === 'SwiperItem' ? 'SwiperItem请手动拖拽到swiper中' : '单击添加组件，默认添加到最外层的view'}>
					{item.name}&nbsp;&nbsp;&nbsp;{item.value}
				</span>
			</SourceBox>
		);
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
						<Item key={index} item={item} />
					))}
				</div>
			)}
		</section>
	);
}
