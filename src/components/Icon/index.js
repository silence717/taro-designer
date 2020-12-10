import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@tarojs/components/dist-h5/react';

export default class Icon1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Icon style={style} {...others} />;
	}
}

Icon1.propTypes = {
	type: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	color: PropTypes.string,
	style: PropTypes.string
};

Icon1.defaultProps = {
	type: '',
	size: 23,
	color: '',
	style: ''
};
