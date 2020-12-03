import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Progress } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class Progress1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Progress style={toJS(style)} {...others} />;
	}
}

Progress1.propTypes = {
	percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	showInfo: PropTypes.bool,
	borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	color: PropTypes.string,
	activeColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	active: PropTypes.bool,
	activeMode: PropTypes.oneOf(['backwards', 'forwards']),
	duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	style: PropTypes.object,
	onClick: PropTypes.func
};

Progress1.defaultProps = {
	percent: 0,
	showInfo: false,
	borderRadius: 0,
	fontSize: 16,
	strokeWidth: 6,
	color: '#09BB07',
	activeColor: '#09BB07',
	backgroundColor: '#EBEBEB',
	active: false,
	activeMode: 'backwards',
	duration: 30,
	style: {},
	onClick: noop
};
