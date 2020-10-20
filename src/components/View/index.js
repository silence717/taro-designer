import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';

export default class View extends Component {

	render() {

		return (
			<div style={toJS(this.props.style)}>
				<h3>View</h3>
				{this.props.children}
			</div>
		)
	}
}

View.propTypes = {
	style: PropTypes.object,
};

View.defaultProps = {
	style: {}
};
