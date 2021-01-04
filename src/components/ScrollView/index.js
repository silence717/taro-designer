import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from '@tarojs/components/dist-h5/react';
import Tips from '../Tips';

export default class ScrollView1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<ScrollView style={style} {...others}>
				{children && children}
				{!children && <Tips msg="ScrollView可滚动视图容器，可拖入其他任意组件。" />}
			</ScrollView>
		);
	}
}

ScrollView1.propTypes = {
	scrollX: PropTypes.bool,
	scrollY: PropTypes.bool,
	upperThreshold: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lowerThreshold: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	scrollTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	scrollLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	scrollIntoView: PropTypes.string,
	scrollWithAnimation: PropTypes.bool,
	style: PropTypes.string
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
	style: ''
};
