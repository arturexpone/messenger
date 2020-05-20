import React from "react";
import {connect} from "react-redux";
import {initRoomId} from "../../redux/ac";
import {filterAllRoomsAndUsers, mapUsersAndMessagesInRoom, utils} from "../../utils/utils";
import {API} from "../../api/api";

const InfoBlock = (props) => {
    const {data} = props;

    const valueOfprops = data.length > 0;

    const AllUsersInRoom = valueOfprops
        ? utils(data, localStorage.getItem('roomId'))
        : [];


    const allRooms = valueOfprops
        ? filterAllRoomsAndUsers(data)
        : [];


    const changeRoom = (roomId) => {
        localStorage.setItem('roomId', roomId);
        API.setRoom(roomId);
    }

    const readyMountAllUsersInRoom = mapUsersAndMessagesInRoom(AllUsersInRoom);
    const readyMountAllRooms = mapUsersAndMessagesInRoom(allRooms, localStorage.getItem('roomId'), changeRoom);

    return (
        <div className='block-info'>
            Info block
            <div className='block-info__user-name'>
                <span>User name: {''}</span>
                <br/>

                <div className='block-info__ul-all-rooms'>
                    {readyMountAllRooms}
                </div>

                <br/>

                <div className='block-info__ul-names-in-room'>

                    <div>
                        Users who participated in the conversation:
                    </div>
                    <div className='block-info__ul-names-in-room'>
                        {readyMountAllUsersInRoom}
                    </div>

                </div>

                <div>
                </div>

            </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
};

export default connect(mapStateToProps, {initRoomId})(InfoBlock)