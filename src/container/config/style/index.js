import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, computed, observable } from 'mobx';
import { Field, Form, Input, Select } from 'cloud-react';

import { CONFIGS } from '@components';
import store from '../../store';

import Spacing from './spacing';

import { properties, styleConfigs } from './constant';

@observer
class Styles extends Component {
	field = new Field(this);

	@observable
	defaultValues = Object.keys(CONFIGS[store.currentType].defaultStyles);

	@computed
	get styleList() {
		return this.defaultValues.map(item => {
			return styleConfigs[item];
		});
	}

	@action
	handleChange = value => {
		this.defaultValues = value;
	};

	@action.bound
	handleFormChange() {
		const values = this.field.getValues();
		// 需要对得到的值进行处理，去除掉当前的 id，更新到 styles 里面
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

	render() {
		return (
			<div className="wrapper">
				<h3>css样式设置</h3>
				<Select
					placeholder="请选择当前组件要配置的样式"
					defaultValue={this.defaultValues}
					dataSource
					multiple
					allowClear
					hasSelectAll
					onChange={this.handleChange}>
					{this.renderOptions(properties)}
				</Select>
				{this.defaultValues.length ? (
					<Form field={this.field}>
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
