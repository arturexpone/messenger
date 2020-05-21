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
            <div className='mount-messages' ref={scrollRef}>
                {isFetch ? <Loader /> : readyMessageDidMount}
            </div>

            <div className='messages-block-real__send-block'>
                <input type="text" value={newMessage} onChange={(e) => changeMessage(e.currentTarget.value)}/>
                <button onClick={messageSend}>Send message</button>
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