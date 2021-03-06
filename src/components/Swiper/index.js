import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Swiper } from '@tarojs/components/dist-h5/react';
import Tips from '../Tips';

export default class Swiper1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Swiper style={toJS(style)} {...others}>
				{children && children}
				{!children && <Tips msg="Swiper滑块视图容器，只可拖入SwiperItem组件。" />}
			</Swiper>
		);
	}
}

Swiper1.propTypes = {
	indicatorDots: PropTypes.bool,
	indicatorColor: PropTypes.string,
	indicatorActiveColor: PropTypes.string,
	autoplay: PropTypes.bool,
	interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	circular: PropTypes.bool,
	vertical: PropTypes.bool,
	previousMargin: PropTypes.string,
	nextMargin: PropTypes.string,
	displayMultipleItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	style: PropTypes.string
};

Swiper1.defaultProps = {
	indicatorDots: false,
	indicatorColor: 'rgba(0, 0, 0, .3)',
	indicatorActiveColor: '#000000',
	autoplay: false,
	interval: 5000,
	duration: 500,
	circular: false,
	vertical: false,
	previousMargin: '0px',
	nextMargin: '0px',
	displayMultipleItems: 1,
	style: ''
};
