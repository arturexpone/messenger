import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {renderMessageInRoom, utils} from "../../utils/utils";
import {API} from "../../api/api";
import {setNewMessage} from "../../redux/ac";
import {Loader} from "../Loader";

const MessageBlock = (props) => {

    const scrollRef = React.createRef();

    const {data, setNewMessage, newMessage, isFetch} = props;
    const roomId = localStorage.getItem('roomId');
    const userName = localStorage.getItem('userName');

    const messagesInRoom = utils(data, roomId, 'messageInRoom');
    const readyMessageDidMount = renderMessageInRoom(messagesInRoom, userName);


    const messageSend = () => {
        const date = new Date();
        const currentTime = `${date.getHours()}:${date.getMinutes()}`
        if (newMessage) {
            API.sendMessage(roomId, userName, newMessage, currentTime);
            setNewMessage('');
        }
    }

    const changeMessage = (message) => {
        setNewMessage(message)
    }


    useEffect(() => {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    })


    console.log('render MESSAGE BLOCK')

    return (
        <div className='messages-block-real'>

            <div className='info-message-block'>
                <div className='info-message-block__avatar-room'>
                    <img src="https://genesta-store.ru/wp-content/uploads/2019/08/1200px-Telegram_2019_Logo.svg-1.png" alt=""/>
                </div>
                <div className='info-message-block__all-info'>
                    <div><h4>Chat with Artur Matveev</h4></div>
                    <div>already 1902 messages</div>
                </div>
            </div>

            <div className='mount-messages' ref={scrollRef}>
                {isFetch ? <Loader /> : readyMessageDidMount}
            </div>

            <div className='messages-block-real__send-block'>
                <div className='messages-block-real__send-block__textarea'>
                    <textarea value={newMessage}
                              onChange={(e) => changeMessage(e.currentTarget.value)}>
                    </textarea>
                </div>
                <div className='messages-block-real__send-block__button'>
                    <div className='messages-block-real__send-block__button-send'
                         onClick={messageSend}
                    >S E N D</div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        newMessage: state.data.newMessage,
        isFetch: state.data.isFetch
    }
};

export default connect(mapStateToProps, {setNewMessage})(MessageBlock)