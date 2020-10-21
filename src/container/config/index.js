import React, { Component } from 'react';
import { observer }  from 'mobx-react';
import { action, computed }  from 'mobx';
import { Button, Field, Form, Input, Select, Tips } from 'cloud-react';
import store from '../store';

import './style.less';

@observer
class Config extends Component {

	filed = new Field(this);

	@computed
	get currentConfig() {
		const type = store.currentType;
		if (type) {
			// eslint-disable-next-line
			const configData = require(`../../components/${type}/config.json`);
			return configData;
		}
		return null;
	}

	@action.bound
	handleFormChange() {

		const values = this.filed.getValues();
		// 需要对得到的值进行处理，去除掉当前的 id，更新到 props 里面
		const newValues =  Object.keys(values).reduce((data, key) => {
			const newKey = key.split('-')[0];
			data[newKey] = values[key];
			return data;
		}, {});

		store.updatePageData(newValues);
	}

	renderByType(item) {

		const { init }  = this.filed;
		// 为了保证每一个 FormItem 的 name 唯一性，我们使用 `key-id` 的形式作为 name，保证数据更新准确
		const name = `${item.key}-${store.currentId}`;
		const options = {
			initValue: store.currentProps[item.key],
			onChange: this.handleFormChange
		}

		switch(item.type) {
			case 'Input':
				return <Input {...init(name, options)} />;
			case 'Select':
				return <Select dataSource={item.dataSource} {...init(name, options)} />
			default:
				return null;

		}
	}

	renderContent() {
		return this.currentConfig.config.map((item, index) => (
			<Form.Item key={index} label={item.label}>
				{ this.renderByType(item) }
			</Form.Item>
		))
	}

	render() {

		return (
			<section className="config">
				<header>属性配置区</header>
				<div>
					{ this.currentConfig ?
						<>
							<Button size="small">删除此元素</Button>
							<Form field={this.field} layout="horizontal" labelCol={{ span: 3 }} style={{ marginTop: '10px' }}>
								{ this.renderContent() }
							</Form>
						</>
						: <Tips msg="请选择要编辑的元素" type="major" />
					}
				</div>

			</section>
		)
	}
}

export default Config;
