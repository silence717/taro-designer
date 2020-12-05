import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, computed, observable, observe } from 'mobx';
import { Field, Form, Input, Checkbox, Radio } from 'cloud-react';

import { CONFIGS } from '@components';
import store from '../../store';

import Spacing from './spacing';

import { properties, styleConfigs } from './constant';

@observer
class Styles extends Component {
	field = new Field(this);

	@observable
	defaultValues = [];

	@observable
	checkedAll = false;

	constructor(props) {
		super(props);
		this.computedDefaultValues();
	}

	componentDidMount() {
		observe(store, 'currentStyles', () => {
			this.field.fieldsMeta = {};
			this.field.__fieldsMeta__ = {};
			this.computedDefaultValues();
		});
	}

	computedDefaultValues() {
		const hasSetValues = Object.keys(store.currentStyles);
		this.defaultValues = hasSetValues.length ? hasSetValues : Object.keys(CONFIGS[store.currentType].defaultStyles);
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
			case 'Radio':
				return (
					<Radio.Group {...init(name, options)}>
						{item.dataSource.map((data, index) => (
							<Radio key={index} value={data}>
								{data}
							</Radio>
						))}
					</Radio.Group>
				);
			case 'Spacing':
				return <Spacing {...init(name, options)} value={options.initValue} />;
			default:
				return null;
		}
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

	@action
	handleChange = value => {
		this.defaultValues = value;
	};

	@action
	handleCheckAll = checked => {
		this.defaultValues = checked ? properties : [];
		this.checkedAll = checked;
	};

	renderProperties() {
		return (
			<Form.Item label="请选择要配置的属性">
				<Checkbox checked={this.checkedAll} onChange={this.handleCheckAll}>
					全选
				</Checkbox>
				<Checkbox.Group value={this.defaultValues} onChange={this.handleChange}>
					{properties.map((item, index) => (
						<Checkbox key={index} value={item}>
							{item}
						</Checkbox>
					))}
				</Checkbox.Group>
			</Form.Item>
		);
	}

	render() {
		return (
			<div className="wrapper">
				<h3>css样式设置</h3>
				<Form layout="horizontal" labelCol={{ span: 6 }} field={this.field}>
					{this.renderProperties()}
					{this.defaultValues.length ? (
						<>
							{this.renderClassName()}
							{this.styleList.map((item, index) => (
								<Form.Item key={index} label={item.label}>
									{this.renderByType(item)}
								</Form.Item>
							))}
						</>
					) : null}
				</Form>
			</div>
		);
	}
}

export default Styles;
