import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Swiper } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class Swiper1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Swiper style={toJS(style)} {...others}>
				{children}
			</Swiper>
		);
	}
}

Swiper1.propTypes = {
	indicatorDots: PropTypes.bool,
	indicatorColor: PropTypes.string,
	indicatorActiveColor: PropTypes.string,
	autoplay: PropTypes.bool,
	current: PropTypes.number,
	interval: PropTypes.number,
	duration: PropTypes.number,
	circular: PropTypes.bool,
	vertical: PropTypes.bool,
	previousMargin: PropTypes.string,
	nextMargin: PropTypes.string,
	displayMultipleItems: PropTypes.number,
	style: PropTypes.object,
	onClick: PropTypes.func
};

Swiper1.defaultProps = {
	indicatorDots: false,
	indicatorColor: 'rgba(0, 0, 0, .3)',
	indicatorActiveColor: '#000000',
	autoplay: false,
	current: 0,
	interval: 5000,
	duration: 500,
	circular: false,
	vertical: false,
	previousMargin: '0px',
	nextMargin: '0px',
	displayMultipleItems: 1,
	style: {},
	onClick: noop
};
