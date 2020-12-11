import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { Button, Tips } from 'cloud-react';

import { CONFIGS } from '@components';

import store from '../store';

import ConfigForm from './form';
import StyleForm from './style';

import './style.less';

@observer
class Config extends Component {
	@action
	handleRemove = () => {
		if (store.currentId) {
			store.removeElement();
		}
	};

	@action
	hanldeCopy = () => {
		if (store.currentId) {
			store.copyElement();
		}
	};

	render() {
		return (
			<section className="config">
				<header>
					属性配置区
					{store.currentType ? `（${CONFIGS[store.currentType].name}）` : ''}
				</header>
				<div className="config-area">
					<Button size="small" onClick={this.handleRemove}>
						删除元素
					</Button>
					{/* <Button size="small" onClick={this.hanldeCopy} style={{ marginLeft: '10px', marginBottom: '10px' }}>
						复制元素
					</Button> */}
					{store.currentType ? (
						<>
							{CONFIGS[store.currentType].tips && <Tips msg={CONFIGS[store.currentType].tips} type="major" />}
							<ConfigForm />
							<StyleForm />
						</>
					) : (
						<Tips msg="请选择要编辑的元素" type="major" style={{ marginTop: '10px' }} />
					)}
				</div>
			</section>
		);
	}
}

export default Config;
