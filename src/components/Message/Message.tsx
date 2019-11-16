import React from 'react';
import css from './Message.module.css';

interface IMessage {
    title: string,
    text: string,
    style: string,
}

const Message = (props: IMessage) => {
    return (
        <div className={`${css.buttonSuccess} ${props.style}`}>
            <div>{props.title}</div>
            <div>{props.text}</div>
        </div>
    );
};

export default Message;
