import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Icon } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class Icon1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Icon style={toJS(style)} {...others} />;
	}
}

Icon1.propTypes = {
	type: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
};

Icon1.defaultProps = {
	type: '',
	size: 23,
	color: '',
	style: {},
	onClick: noop
};
