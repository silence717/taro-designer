import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observe } from 'mobx';
import { Field, Form, Input, InputNumber, Radio, Select } from 'cloud-react';
import { CONFIGS } from '@components';
import store from '../store';
import Spacing from './Spacing';

@observer
class ConfigForm extends Component {
	field = new Field(this);

	componentDidMount() {
		// 切换组件的时候，form表单虽然重新渲染了，但是 filed 里面存在的值并没有清除，因此需要手动获取一下所有的 names，然后保证数据渲染的准确性
		observe(store, 'currentId', () => {
			this.field.fieldsMeta = {};
			this.field.__fieldsMeta__ = {};
		});
	}

	@action.bound
	handleFormChange() {
		const values = this.field.getValues();
		// 需要对得到的值进行处理，去除掉当前的 id，更新到 props 里面
		const newValues = Object.keys(values).reduce((data, key) => {
			const newKey = key.split('-')[0];
			data[newKey] = values[key];
			return data;
		}, {});
		// console.log(newValues);
		store.updatePageData(newValues);
	}

	renderByType(item) {
		const { init } = this.field;
		// 为了保证每一个 Form.Item 的 name 唯一性，我们使用 `key-id` 的形式作为 name，如果为样式的话，增加一个 styles_ 前缀，使得好分割，保证数据更新准确
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
			case 'Spacing':
				return <Spacing {...init(name, options)} value={value} />;
			default:
				return null;
		}
	}

	render() {
		const configs = CONFIGS[store.currentType].config;

		return (
			<Form field={this.field}>
				{configs.map((item, index) => (
					<Form.Item key={index} label={item.label}>
						{this.renderByType(item)}
					</Form.Item>
				))}
			</Form>
		);
	}
}

export default ConfigForm;
