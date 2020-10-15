import React, { Component } from 'react';
import { observer }  from 'mobx-react';
import { action, computed }  from 'mobx';
import { Button, Field, Form, Input, Select } from 'cloud-react';
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
		store.setCurrentProps(values);
	}

	@action.bound
	renderByType(item) {

		const { init }  = this.filed;

		switch(item.type) {
			case 'Input':
				return <Input {...init(`${item.key}`, {
					initValue: store.currentProps[item.key],
					onChange: this.handleFormChange
				})} />;
			case 'Select':
				return <Select dataSource={item.dataSource} {...init(`${item.key}`, {
					initValue: store.currentProps[item.key],
					onChange: this.handleFormChange
				})} />
			default:
				return null;

		}
	}

	render() {

		return (
			<section className="config">
				<header>属性配置区</header>
				<div>
					<Button size="small">删除此元素</Button>
					<Form field={this.field} layout="horizontal" labelCol={{ span: 3 }} style={{ marginTop: '10px' }}>
						{
							this.currentConfig && this.currentConfig.props.map((item, index) => (
								<Form.Item key={index} label={item.label}>
									{ this.renderByType(item) }
								</Form.Item>
							))
						}
					</Form>
				</div>
			</section>
		)
	}
}

export default Config;
