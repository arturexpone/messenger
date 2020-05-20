import React from "react";
import {connect} from "react-redux";
import {renderMessageInRoom, utils} from "../../utils/utils";
import {API} from "../../api/api";
import {setNewMessage} from "../../redux/ac";
import {Loader} from "../Loader";

const MessageBlock = (props) => {

    const {data, setNewMessage, newMessage, isFetch} = props;
    const roomId = localStorage.getItem('roomId');
    const userName = localStorage.getItem('userName');

    const messagesInRoom = utils(data, roomId, 'messageInRoom');
    const readyMessageDidMount = renderMessageInRoom(messagesInRoom);

    const messageSend = () => {
        if (newMessage) {
            API.sendMessage(roomId, userName, newMessage);
            setNewMessage('');
        }
    }

    const changeMessage = (message) => {
        setNewMessage(message)
    }

    return (
        <div className='block-message'>
            <div>
                Message block
                {isFetch ? <Loader /> : readyMessageDidMount}
            </div>
            
            <div>
                <div>
                    <input type="text" value={newMessage} onChange={(e) => changeMessage(e.currentTarget.value)}/>
                </div>

                <div>
                    <button onClick={messageSend}>Send message</button>
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