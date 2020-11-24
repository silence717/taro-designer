import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { __ComponentName__ } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class __ComponentName__1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<__ComponentName__ style={toJS(style)} {...others}>
				{children}
			</__ComponentName__>
		);
	}
}

__ComponentName__1.propTypes = {
	a: PropTypes.string,
	b: PropTypes.number,
	c: PropTypes.bool,
	d: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
};

__ComponentName__1.defaultProps = {
	a: 'ok',
	b: 50,
	c: 400,
	d: 'apple',
	style: {},
	onClick: noop
};
