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
        if (newMessage) {
            API.sendMessage(roomId, userName, newMessage);
            setNewMessage('');
        }
    }

    const submitTextarea = (e) => {
        if (newMessage && e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            API.sendMessage(roomId, userName, newMessage);
            setNewMessage('');
        }
    }

    const changeMessage = (message) => {
        setNewMessage(message)
    }


    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    })

    return (
        <div className='messages-block-real'>

            <div className='info-message-block'>
                <div className='info-message-block__avatar-room'>
                    <img
                        src='https://www.footbridgemedia.com/contractor-marketing-tips/wp-content/uploads/2018/01/live-chat-1.jpg'
                        alt=""/>
                </div>
                <div className='info-message-block__all-info'>
                    <div><h4>Chat with cool people :) Creator - {messagesInRoom[0] ? messagesInRoom[0].userName : ''}</h4></div>
                    <div>already {readyMessageDidMount.length} messages</div>
                </div>
            </div>

            <div className='mount-messages' ref={scrollRef}>
                {isFetch ? <Loader/> : readyMessageDidMount}
            </div>

            <div className='messages-block-real__send-block'>
                <div className='messages-block-real__send-block__textarea'>
                        <textarea value={newMessage}
                                  onChange={(e) => changeMessage(e.currentTarget.value)}
                                  onKeyDown={submitTextarea}
                        >
                    </textarea>
                </div>
                <div className='messages-block-real__send-block__button'>
                    <div className='messages-block-real__send-block__button-send'
                         onClick={messageSend}
                    >S E N D
                    </div>
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