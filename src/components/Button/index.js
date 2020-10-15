import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'cloud-react';

export default class Button1 extends Component {

	render() {
		const { text, size, theme, ...othersProps } = this.props;
		return <Button type={theme} size={size} {...othersProps}>{text}</Button>
	}
}

Button1.propTypes = {
	text: PropTypes.string,
	size: PropTypes.string,
	theme: PropTypes.string,
};

Button1.defaultProps = {
	text: 'ok',
	size: 'default',
	theme: 'normal'
};
