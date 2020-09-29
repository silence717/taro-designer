import React, { PureComponent } from 'react';
import Node from '../src/index';

export default class App extends PureComponent {

    render() {

		const props = {
			title: 'Silence User Info'
		};

        return <Node title={props.title} />;
    }
}

