import React, {useEffect} from "react";
import InfoBlock from "./InfoBlock";
import MessageBlock from "./MessageBlock";
import {setData, toggleIsFetch} from "../../redux/ac";
import {connect} from "react-redux";
import {socket} from "../../api/socket";
import {API} from "../../api/api";
import UsersBlock from "./UsersBlock";

const Messenger = (props) => {

    const {data, setData, toggleIsFetch} = props;
    const userName = localStorage.getItem('userName');
    const roomId = localStorage.getItem('roomId');


    useEffect(() => {
        if (data.length === 0) {
            API.login(userName, roomId);
            toggleIsFetch(true);
        }
        socket.on('set all data', data => {
            setData(data);
            toggleIsFetch(false);
        })
    })

    console.log('RENDER: Messenger')
    return (
        <div className='block-messenger'>
            <InfoBlock />
            <MessageBlock />
            <UsersBlock />
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data.data
})

export default connect(mapStateToProps, {setData, toggleIsFetch})(Messenger)
