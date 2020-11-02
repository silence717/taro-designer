import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@tarojs/components/dist-h5/react';

export default class Button1 extends Component {
	render() {
		const { text, ...othersProps } = this.props;
		return <Button {...othersProps}>{text}</Button>;
	}
}

Button1.propTypes = {
	text: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string
};

Button1.defaultProps = {
	text: 'ok',
	size: 'default',
	type: 'default'
};
