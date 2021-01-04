import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Picker } from '@tarojs/components/dist-h5/react';
import Tips from '../Tips';

export default class Picker1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Picker style={toJS(style)} {...others}>
				<Tips msg="Picker选择器，只可设置mode。" />
				{children}
			</Picker>
		);
	}
}

Picker1.propTypes = {
	mode: PropTypes.string,
	disabled: PropTypes.bool,
	style: PropTypes.string
};

Picker1.defaultProps = {
	mode: 'selector',
	disabled: false,
	style: ''
};
