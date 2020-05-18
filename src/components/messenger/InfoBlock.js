import React, {useEffect} from "react";
import {connect} from "react-redux";
import {socket} from '../../api/socket'
import {initAllRooms, setRooms} from "../../redux/ac";
import {API} from "../../api/api";

const InfoBlock = (props) => {

    const {rooms, initAllRooms, activeRoom} = props;
    const userName = localStorage.getItem('userName');
    let allRooms = [];

    useEffect( () => {

        API.getAllRooms();

        if (rooms.length === 0) {
            socket.on('sent all rooms', data => {
                allRooms = data.map((r, i) => <option key={i} selected={r.roomId === activeRoom} value={r.roomId}>{r.roomId}</option>)
                initAllRooms(allRooms)
            })
        }
    });

    return (
        <div className='block-info'>
            Info block
            <br/>
            <span>User name: {userName}</span>
            <br/>
            <select name="Open rooms" id="" defaultValue='445'>
                {rooms}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({
    rooms: state.data.rooms,
    activeRoom: state.data.login.roomId
});

export default connect(mapStateToProps, {setRooms, initAllRooms})(InfoBlock)