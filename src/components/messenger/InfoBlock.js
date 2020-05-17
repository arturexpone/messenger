import React, {useEffect} from "react";
import {connect} from "react-redux";
import {socket} from '../../api/socket'
import {setRooms} from "../../redux/ac";

const InfoBlock = (props) => {

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    rooms: state.data.rooms
});

export default connect(mapStateToProps, {setRooms})(InfoBlock)