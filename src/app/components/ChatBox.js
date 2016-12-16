import React from 'react';
import MessageList from './MessageList';
import ClearButton from './ClearButton';
import PostMessageForm from './PostMessageForm';

class ChatBox extends React.Component{

    constructor() {
        super();
        this.state = {};
        this.state.messages = [
        {
            id: 1,
            timestamp: 1478859071000,
            owner: 'Chuck',
            text: 'Hello Mark, how is it going?'
        },
        {
            id: 2,
            timestamp: 1478859115000,
            owner: 'Mark',
            text: 'What do you want, Chuck?'
        },
        {
            id: 3,
            timestamp: 1478859131000,
            owner: 'Chuck',
            text: ':D'
        },
        {
            id: 4,
            timestamp: 1478859165000,
            owner: 'Chuck',
            text: 'I forgot you were not into small talk.'
        }
      ];

      this.appendChatMessage = this.appendChatMessage.bind(this);
      this.clearMessages = this.clearMessages.bind(this);
    }

    appendChatMessage( owner, text ) {
        let newMessage = {
            id : this.state.messages.length + 1,
            timestamp: new Date().getTime(),
            owner: owner,
            text: text
        };

        this.setState({ messages: [...this.state.messages, newMessage] });
    }

    clearMessages() {
        this.setState({ messages: [] });
    }

    render() {
        let isDisabled = this.state.messages.length === 0;

        return (
            <div>
                <MessageList messages={this.state.messages} />
                <PostMessageForm appendChatMessage={this.appendChatMessage}/>
                <ClearButton clearMessages={this.clearMessages}
                             isDisabled={isDisabled}
                            />
            </div>
        )
    }
}

export default ChatBox;