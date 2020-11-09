import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class Button1 extends Component {
	render() {
		const { content, ...othersProps } = this.props;
		return <Button {...othersProps}>{content}</Button>;
	}
}

Button1.propTypes = {
	content: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
	hoverClass: PropTypes.string,
	plain: PropTypes.bool,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	hoverStartTime: PropTypes.number,
	hoverStayTime: PropTypes.number,
	onClick: PropTypes.func
};

Button1.defaultProps = {
	content: 'ok',
	size: 'default',
	type: 'default',
	hoverClass: 'none',
	plain: false,
	disabled: false,
	loading: false,
	hoverStartTime: 20,
	hoverStayTime: 70,
	onClick: noop
};
