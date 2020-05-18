import React, {useEffect} from "react";
import InfoBlock from "./InfoBlock";
import MessageBlock from "./MessageBlock";
import {socket} from "../../api/socket";
import {connect} from "react-redux";
import {setRooms} from "../../redux/ac";

const Messenger = (props) => {
    const {setRooms, rooms} = props;

    useEffect(() => {
        socket.on('get room', data => {
            console.log('пытаюсь получить руму')
            setRooms(data);
        })
    })

    return (
        <div className='block-messenger'>
            <InfoBlock />
            <MessageBlock />
        </div>
    )
}

const mapStateToProps = (state) => ({
    rooms: state.data.rooms
});

export default connect(mapStateToProps, {setRooms})(Messenger)