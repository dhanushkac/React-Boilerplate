import React from 'react';
import Message from './Message';

class ClearButton extends React.Component{

	constructor() {
		super();

		this.handleClearMessages = this.handleClearMessages.bind( this );
	}

	handleClearMessages() {
		this.props.clearMessages();
	}

	render() {

		let button = <button onClick={this.handleClearMessages}>Clear</button>;

		if( this.props.isDisabled ) {
			button = <button disabled="disabled">Clear</button>;
		}

		return (
			<div>{button}</div>
		)
	}
}

export default ClearButton;