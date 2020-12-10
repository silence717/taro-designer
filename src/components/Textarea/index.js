import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Textarea } from '@tarojs/components/dist-h5/react';

export default class Textarea1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Textarea style={toJS(style)} {...others} />;
	}
}

Textarea1.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	maxlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	autoFocus: PropTypes.bool,
	style: PropTypes.string
};

Textarea1.defaultProps = {
	value: '',
	placeholder: '',
	disabled: false,
	maxlength: 140,
	autoFocus: false,
	style: ''
};
