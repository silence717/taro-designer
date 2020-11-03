import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { View } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class View1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<View style={toJS(style)} {...others}>
				{children}
			</View>
		);
	}
}

View1.propTypes = {
	hoverClass: PropTypes.string,
	hoverStartTime: PropTypes.number,
	hoverStayTime: PropTypes.number,
	style: PropTypes.object,
	onClick: PropTypes.func
};

View1.defaultProps = {
	hoverClass: 'none',
	hoverStartTime: 50,
	hoverStayTime: 400,
	style: {},
	onClick: noop
};
