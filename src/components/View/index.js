import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { noop } from '@utils';

export default class View extends Component {
	render() {
		const { style, ...others } = this.props;

		return (
			<div style={toJS(style)} {...others}>
				{/* <h3>View layout</h3> */}
				{this.props.children}
			</div>
		);
	}
}

View.propTypes = {
	style: PropTypes.object,
	onClick: PropTypes.func
};

View.defaultProps = {
	style: {},
	onClick: noop
};
