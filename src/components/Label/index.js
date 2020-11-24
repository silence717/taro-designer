import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Label } from '@tarojs/components/dist-h5/react';

export default class Label1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Label style={toJS(style)} {...others}>
				{children}
			</Label>
		);
	}
}

Label1.propTypes = {
	for: PropTypes.string,
	style: PropTypes.object
};

Label1.defaultProps = {
	for: '',
	style: {}
};
