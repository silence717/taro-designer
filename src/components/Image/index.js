import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Image } from '@tarojs/components/dist-h5/react';

export default class Image1 extends Component {
	render() {
		const { style, ...others } = this.props;
		return <Image style={toJS(style)} {...others} />;
	}
}

Image1.propTypes = {
	src: PropTypes.string,
	mode: PropTypes.string,
	style: PropTypes.object
};

Image1.defaultProps = {
	src: '',
	mode: 'scaleToFill',
	style: {}
};
