import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@tarojs/components/dist-h5/react';

export default class Switch1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Switch style={style} {...others} />;
	}
}

Switch1.propTypes = {
	checked: PropTypes.bool,
	type: PropTypes.oneOf(['switch', 'checkbox']),
	color: PropTypes.string,
	style: PropTypes.object
};

Switch1.defaultProps = {
	checked: false,
	type: 'swirch',
	color: '#04BE02',
	style: {}
};
