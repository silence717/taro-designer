import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from '@tarojs/components/dist-h5/react';

export default class WebView1 extends Component {
	render() {
		return <WebView {...this.props} />;
	}
}

WebView1.propTypes = {
	src: PropTypes.string
};

WebView1.defaultProps = {
	src: 'https://mp.weixin.qq.com/'
};
