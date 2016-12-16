import React from 'react';

class Message extends React.Component {
	render() {
		let now = new Date( this.props.timestamp );
		let hhmmss = now.toISOString().substr(11, 8);

		return (
			<div className="message">
				<span className="message-time">{hhmmss} </span>
				<strong className="message-owner"> {this.props.owner}</strong>
				<span className="message-text"> {this.props.text}</span>
			</div>
		);
	}
}

export default Message;