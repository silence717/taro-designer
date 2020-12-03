import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Slider } from '@tarojs/components/dist-h5/react';

export default class Slider1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return <Slider style={toJS(style)} {...others} />;
	}
}

Slider1.propTypes = {
	min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	disabled: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	activeColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	blockSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	blockColor: PropTypes.string,
	showValue: PropTypes.bool,
	style: PropTypes.object
};

Slider1.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	disabled: false,
	value: 0,
	activeColor: '#1aad19',
	backgroundColor: '#e9e9e9',
	blockSize: 28,
	blockColor: '#ffffff',
	showValue: false,
	style: {}
};
