import React from "react";
import {connect} from "react-redux";
import {mapUsersAndMessagesInRoom, utils} from "../../utils/utils";
import {Loader} from "../Loader";

const UsersBlock = (props) => {
    const {data, isFetch} = props;

    const valueOfprops = data.length > 0;
    const roomId = localStorage.getItem('roomId');
    const userName = localStorage.getItem('userName')

    const AllUsersInRoom = valueOfprops
        ? utils(data, roomId)
        : [];


    const readyMountAllUsersInRoom = mapUsersAndMessagesInRoom(AllUsersInRoom, null, null, null, userName);

    return (
        <div className='block-users'>
                    <div className='block-users__users'>
                        <h4>ACTIVE USERS IN ROOM:</h4>
                    </div>

                    <div className='block-info__ul-names-in-room'>
                        {isFetch ? <Loader/> : readyMountAllUsersInRoom}
                    </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        isFetch: state.data.isFetch
    }
};

export default connect(mapStateToProps, {})(UsersBlock)