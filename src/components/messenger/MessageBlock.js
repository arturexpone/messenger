import React, {useEffect} from "react";
import {connect} from "react-redux";
import {renderMessageInRoom, utils} from "../../utils/utils";
import {API} from "../../api/api";
import {setNewMessage} from "../../redux/ac";

const MessageBlock = (props) => {

    const {data, setNewMessage, newMessage} = props;
    const roomId = localStorage.getItem('roomId');
    const userName = localStorage.getItem('userName');

    const messagesInRoom = utils(data, roomId, 'messageInRoom');
    const readyMessageDidMount = renderMessageInRoom(messagesInRoom);

    const messageSend = () => {
        API.sendMessage(roomId, userName, newMessage);
        setNewMessage('');

    }

    const changeMessage = (message) => {
        setNewMessage(message)
    }

    return (
        <div className='block-message'>
            <div>
                Message block
                {readyMessageDidMount}
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
        newMessage: state.data.newMessage
    }
};

export default connect(mapStateToProps, {setNewMessage})(MessageBlock)