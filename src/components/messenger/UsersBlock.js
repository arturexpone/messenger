import React from "react";
import {connect} from "react-redux";
import {mapUsersAndMessagesInRoom, utils} from "../../utils/utils";
import {Loader} from "../Loader";

const UsersBlock = (props) => {
    const {data, isFetch} = props;

    const valueOfprops = data.length > 0;
    const roomId = localStorage.getItem('roomId');

    const AllUsersInRoom = valueOfprops
        ? utils(data, roomId)
        : [];


    const readyMountAllUsersInRoom = mapUsersAndMessagesInRoom(AllUsersInRoom);

    return (
        <div className='block-info'>
            All Users In Room

                <div className='block-info__ul-names-in-room'>

                    <div>
                        Users who participated in the conversation:
                    </div>

                    <div className='block-info__ul-names-in-room'>
                        {isFetch ? <Loader/> : readyMountAllUsersInRoom}
                    </div>

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