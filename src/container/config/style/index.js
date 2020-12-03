import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, computed, observe } from 'mobx';
import { Field, Form, Input, Select } from 'cloud-react';

import { CONFIGS } from '@components';
import store from '../../store';

import Spacing from './spacing';

import { properties, styleConfigs } from './constant';

@observer
class Styles extends Component {
	field = new Field(this);

	componentDidMount() {
		observe(store, 'currentId', () => {
			this.field.fieldsMeta = {};
			this.field.__fieldsMeta__ = {};
		});
	}

	@computed
	get defaultValues() {
		const hasSetValues = Object.keys(store.currentStyles);
		return hasSetValues.length ? hasSetValues : Object.keys(CONFIGS[store.currentType].defaultStyles);
	}

	@computed
	get styleList() {
		return this.defaultValues
			.filter(item => item !== 'className')
			.map(item => {
				return styleConfigs[item];
			});
	}

	@computed
	get isRequired() {
		return Object.keys(store.currentStyles).length;
	}

	@action
	handleChange = value => {
		this.defaultValues = value;
	};

	@action.bound
	handleFormChange() {
		const values = this.field.getValues();

		const newValues = Object.keys(values).reduce((data, key) => {
			const newKey = key.split('-')[0];
			data[newKey] = values[key];
			return data;
		}, {});
		store.updatePageStyle(newValues);
	}

	renderByType(item) {
		const { init } = this.field;
		const name = `${item.key}-${store.currentId}`;
		const value = store.currentStyles[item.key];
		const defaultValue = CONFIGS[store.currentType].defaultStyles[item.key];

		const options = {
			initValue: value || defaultValue,
			onChange: this.handleFormChange
		};

		switch (item.type) {
			case 'Input':
				return <Input {...init(name, options)} />;
			case 'Color':
				return <Input type="color" {...init(name, options)} />;
			case 'Select':
				return (
					<Select dataSource={item.dataSource} {...init(name, options)}>
						{this.renderOptions(item.dataSource)}
					</Select>
				);
			case 'Spacing':
				return <Spacing {...init(name, options)} value={options.initValue} />;
			default:
				return null;
		}
	}

	renderOptions(data) {
		return data.map((item, index) => (
			<Select.Option key={index} value={item}>
				{item}
			</Select.Option>
		));
	}

	renderClassName() {
		const { init } = this.field;

		return (
			<Form.Item label="class名称">
				<Input
					{...init(`className-${store.currentId}`, {
						initValue: store.currentStyles.className || '',
						rules: [{ required: this.isRequired, message: 'class名称不能为空' }],
						onChange: this.handleFormChange
					})}
				/>
			</Form.Item>
		);
	}

	renderSelect() {
		return (
			<Select
				placeholder="请选择当前组件要配置的样式"
				value={this.defaultValues}
				dataSource
				multiple
				allowClear
				hasSelectAll
				onChange={this.handleChange}>
				{this.renderOptions(properties)}
			</Select>
		);
	}

	render() {
		return (
			<div className="wrapper">
				<h3>css样式设置</h3>
				{this.renderSelect()}
				{this.defaultValues.length ? (
					<Form field={this.field}>
						{this.renderClassName()}
						{this.styleList.map((item, index) => (
							<Form.Item key={index} label={item.label}>
								{this.renderByType(item)}
							</Form.Item>
						))}
					</Form>
				) : null}
			</div>
		);
	}
}

export default Styles;
