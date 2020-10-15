import React from 'react';
import Group from './group';
import './style.less';

import { groupData } from './store';


export default function Raw() {

	return (
		<section className="raw">
			<header>组件拖拽区</header>
			{
				groupData.map((item, index) => (
					<Group key={index} text={item.text} value={item.value} />
				))
			}
		</section>
	)


}
