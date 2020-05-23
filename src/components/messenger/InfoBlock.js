import React from "react";
import {connect} from "react-redux";
import {initRoomId, toggleIsFetch} from "../../redux/ac";
import {filterAllRoomsAndUsers, mapUsersAndMessagesInRoom} from "../../utils/utils";
import {API} from "../../api/api";
import {Loader} from "../Loader";
import {Modal} from "../Modal";

const InfoBlock = (props) => {
    const {data, toggleIsFetch} = props;

    const userName = localStorage.getItem('userName');

    const valueOfprops = data.length > 0;

    const allRooms = valueOfprops
        ? filterAllRoomsAndUsers(data)
        : [];


    const changeRoom = (roomId) => {
        toggleIsFetch(true);
        localStorage.setItem('roomId', roomId);
        API.setRoom(roomId);
    }

    const readyMountAllRooms = mapUsersAndMessagesInRoom(allRooms, localStorage.getItem('roomId'), changeRoom, 'rooms', false);

    return (
        <div className='block-info'>
                <div className='block-info__rooms-info'>
                    <h4>ROOMS:</h4>
                </div>

                <div className='block-info__ul-all-rooms'>
                    {data.length <= 0 ? <Loader /> : readyMountAllRooms}
                </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
};

export default connect(mapStateToProps, {initRoomId, toggleIsFetch})(InfoBlock)