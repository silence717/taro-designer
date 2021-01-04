import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '@tarojs/components/dist-h5/react';
import Tips from '../Tips';

export default class Label1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Label style={style} {...others}>
				{children && children}
				{!children && <Tips msg="Label标签，可拖入Button, Checkbox, Radio, Switch组件" />}
			</Label>
		);
	}
}

Label1.propTypes = {
	for: PropTypes.string,
	style: PropTypes.string
};

Label1.defaultProps = {
	for: '',
	style: ''
};
