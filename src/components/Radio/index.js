import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio } from '@tarojs/components/dist-h5/react';

export default class Radio1 extends Component {
	render() {
		const { style, content, children, ...others } = this.props;
		return (
			<Radio style={style} {...others}>
				{content}
				{children}
			</Radio>
		);
	}
}

Radio1.propTypes = {
	content: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	style: PropTypes.string
};

Radio1.defaultProps = {
	content: 'a',
	checked: false,
	disabled: false,
	style: ''
};
