import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Input } from '@tarojs/components/dist-h5/react';

export default class Input1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Input style={toJS(style)} {...others} />;
	}
}

Input1.propTypes = {
	type: PropTypes.oneOf(['number', 'text', 'idcard', 'digit']),
	password: PropTypes.bool,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	maxLength: PropTypes.number,
	focus: PropTypes.bool,
	style: PropTypes.object
};

Input1.defaultProps = {
	type: 'text',
	password: false,
	placeholder: '',
	disabled: false,
	maxLength: 140,
	focus: false,
	style: {}
};
