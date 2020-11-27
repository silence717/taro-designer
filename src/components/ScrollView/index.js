import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { ScrollView } from '@tarojs/components/dist-h5/react';

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
	scrollTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	scrollLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	scrollIntoView: PropTypes.string,
	scrollWithAnimation: PropTypes.bool,
	style: PropTypes.object
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
	style: {}
};
