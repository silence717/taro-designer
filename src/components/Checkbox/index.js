import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@tarojs/components/dist-h5/react';

export default class Checkbox1 extends Component {
	render() {
		const { style, content, children, ...others } = this.props;
		return (
			<Checkbox style={style} {...others}>
				{content}
				{children}
			</Checkbox>
		);
	}
}

Checkbox1.propTypes = {
	value: PropTypes.string,
	content: PropTypes.string,
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	color: PropTypes.string,
	style: PropTypes.string
};

Checkbox1.defaultProps = {
	value: 'a',
	content: 'a',
	disabled: false,
	checked: false,
	color: '',
	style: ''
};
