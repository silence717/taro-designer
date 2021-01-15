import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { Button, Message, Tips } from 'cloud-react';

import { CONFIGS } from '@components';

import store from '../store';

import ConfigForm from './form';
import StyleForm from './style';

import './style.less';

@observer
class Config extends Component {
	@action
	handleRemove = () => {
		if (!store.currentId) {
			Message.error('请选中要删除的元素！');
			return;
		}

		if (store.currentId === '1') {
			Message.error('最外层 view 不可删除！');
			return;
		}

		store.removeElement();
		Message.success('删除成功！');
	};

	@action
	hanldeCopy = () => {
		if (!store.currentId) {
			Message.error('请选中要复制的元素');
			return;
		}

		if (store.currentId === '1') {
			Message.error('最外层 view 不可复制！');
			return;
		}

		store.copyElement();
		Message.success('复制成功！');
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
						删除组件
					</Button>
					<Button size="small" onClick={this.hanldeCopy} style={{ marginLeft: '10px', marginBottom: '10px' }}>
						复制组件
					</Button>
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
