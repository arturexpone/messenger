import React, {useEffect} from "react";
import InfoBlock from "./InfoBlock";
import MessageBlock from "./MessageBlock";
import {setData, toggleIsFetch} from "../../redux/ac";
import {connect} from "react-redux";
import {socket} from "../../api/socket";
import {API} from "../../api/api";
import {Loader} from "../Loader";

const Messenger = (props) => {

    const {data, setData, isFetch, toggleIsFetch} = props;
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
    // if (isFetch) {
    //     return <Loader />
    // }
    return (
        <div className='block-messenger'>
            <InfoBlock />
            <MessageBlock />
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data.data,
    isFetch: state.data.isFetch
})

export default connect(mapStateToProps, {setData, toggleIsFetch})(Messenger)
