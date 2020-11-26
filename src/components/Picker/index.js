import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Picker } from '@tarojs/components/dist-h5/react';

export default class Picker1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Picker style={toJS(style)} {...others}>
				{children}
			</Picker>
		);
	}
}

Picker1.propTypes = {
	mode: PropTypes.string,
	disabled: PropTypes.bool,
	style: PropTypes.object
};

Picker1.defaultProps = {
	mode: 'selector',
	disabled: false,
	style: {}
};
