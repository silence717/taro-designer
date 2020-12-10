import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwiperItem } from '@tarojs/components/dist-h5/react';

export default class SwiperItem1 extends Component {
	render() {
		const { style, children, ...others } = this.props;

		return (
			<SwiperItem style={style} {...others}>
				{children}
			</SwiperItem>
		);
	}
}

SwiperItem1.propTypes = {
	itemId: PropTypes.string,
	style: PropTypes.string
};

SwiperItem1.defaultProps = {
	itemId: '',
	style: ''
};
