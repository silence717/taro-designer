import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { ScrollView } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class ScrollView1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<ScrollView style={toJS(style)} {...others}>
				{children}
			</ScrollView>
		);
	}
}

ScrollView1.propTypes = {
	scrollX: PropTypes.bool,
	scrollY: PropTypes.bool,
	upperThreshold: PropTypes.number,
	lowerThreshold: PropTypes.number,
	scrollTop: PropTypes.string,
	scrollLeft: PropTypes.string,
	scrollIntoView: PropTypes.string,
	scrollWithAnimation: PropTypes.bool,
	// onScrollToUpper: PropTypes.func,
	// onScrollToLower: PropTypes.func,
	// onScroll: PropTypes.func,
	style: PropTypes.object,
	onClick: PropTypes.func
};

ScrollView1.defaultProps = {
	scrollX: false,
	scrollY: false,
	upperThreshold: 50,
	lowerThreshold: 50,
	scrollTop: 0,
	scrollLeft: 0,
	scrollIntoView: '',
	scrollWithAnimation: false,
	// onScrollToUpper: noop,
	// onScrollToLower: noop,
	// onScroll: noop,
	style: {},
	onClick: noop
};
