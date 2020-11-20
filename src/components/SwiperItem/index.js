import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { SwiperItem } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class SwiperItem1 extends Component {
	render() {
		const { style, children, ...others } = this.props;

		return (
			<SwiperItem style={toJS(style)} {...others}>
				{children}
			</SwiperItem>
		);
	}
}

SwiperItem1.propTypes = {
	itemId: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
};

SwiperItem1.defaultProps = {
	itemId: '',
	style: {},
	onClick: noop
};
