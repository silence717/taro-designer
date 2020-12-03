import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Tips } from 'cloud-react';

import { CONFIGS } from '@components';

import store from '../store';

import ConfigForm from './form';
import StyleForm from './style';

import './style.less';

@observer
class Config extends Component {
	render() {
		return (
			<section className="config">
				<header>
					属性配置区
					{store.currentId ? `（${CONFIGS[store.currentType].name}）` : ''}
				</header>
				<div>
					{store.currentId ? (
						<>
							<Button size="small" style={{ marginBottom: '10px' }}>
								删除此元素
							</Button>
							{CONFIGS[store.currentType].tips && <Tips msg={CONFIGS[store.currentType].tips} type="major" />}
							<ConfigForm />
							<StyleForm />
						</>
					) : (
						<Tips msg="请选择要编辑的元素" type="major" />
					)}
				</div>
			</section>
		);
	}
}

export default Config;
