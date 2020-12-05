import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observe } from 'mobx';
import { Field, Form, Input, InputNumber, Radio, Select } from 'cloud-react';
import { CONFIGS } from '@components';
import store from '../store';

@observer
class ConfigForm extends Component {
	field = new Field(this);

	componentDidMount() {
		// 切换组件的时候，form表单虽然重新渲染了，但是 filed 里面存在的值并没有清除，因此需要手动获取一下所有的 names，然后保证数据渲染的准确性
		observe(store, 'currentProps', () => {
			this.field.fieldsMeta = {};
			this.field.__fieldsMeta__ = {};
		});
	}

	@action.bound
	handleFormChange() {
		const values = this.field.getValues();
		const newValues = Object.keys(values).reduce((data, key) => {
			const newKey = key.split('-')[0];
			data[newKey] = values[key];
			return data;
		}, {});
		store.updatePageData(newValues);
	}

	renderByType(item) {
		const { init } = this.field;
		const name = `${item.key}-${store.currentId}`;
		const value = store.currentProps[item.key];
		const defaultValue = CONFIGS[store.currentType].defaultProps[item.key];

		const options = {
			initValue: value || defaultValue,
			onChange: this.handleFormChange
		};

		switch (item.type) {
			case 'Input':
				return <Input {...init(name, options)} />;
			case 'InputNumber':
				return <InputNumber {...init(name, options)} min={item.min || -Infinity} max={item.max || Infinity} />;
			case 'Textarea':
				return <Input.Textarea rows={4} {...init(name, options)} />;
			case 'Select':
				return <Select dataSource={item.dataSource} {...init(name, options)} />;
			case 'Radio':
				return (
					<Radio.Group {...init(name, options)}>
						<Radio value>是</Radio>
						<Radio value={false}>否</Radio>
					</Radio.Group>
				);
			default:
				return null;
		}
	}

	render() {
		const configs = CONFIGS[store.currentType].config;

		return (
			<div className="wrapper">
				<h3>组件属性配置</h3>
				<Form layout="horizontal" labelCol={{ span: 6 }} field={this.field}>
					{configs.map((item, index) => (
						<Form.Item key={index} label={item.label}>
							{this.renderByType(item)}
						</Form.Item>
					))}
				</Form>
			</div>
		);
	}
}

export default ConfigForm;
