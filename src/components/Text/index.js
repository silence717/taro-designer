import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Text } from '@tarojs/components/dist-h5/react';
import { noop } from '@utils';

export default class Text1 extends Component {
	render() {
		const { content, style, ...others } = this.props;
		return (
			<Text style={toJS(style)} {...others}>
				{content}
			</Text>
		);
	}
}

Text1.propTypes = {
	content: PropTypes.string,
	selectable: PropTypes.bool,
	style: PropTypes.string,
	onClick: PropTypes.func
};

Text1.defaultProps = {
	content: '',
	selectable: false,
	style: '',
	onClick: noop
};
