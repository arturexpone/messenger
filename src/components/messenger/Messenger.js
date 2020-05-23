import React, {useEffect} from "react";
import InfoBlock from "./InfoBlock";
import MessageBlock from "./MessageBlock";
import {setData} from "../../redux/ac";
import {connect} from "react-redux";
import {socket} from "../../api/socket";
import {API} from "../../api/api";

const Messenger = (props) => {

    const {data, setData} = props;
    const userName = localStorage.getItem('userName');
    const roomId = localStorage.getItem('roomId');


    useEffect(() => {
        if (data.length === 0) {
            API.login(userName, roomId);
        }
        socket.on('set all data', data => {
            setData(data)
        })
    })

    console.log('RENDER: Messenger')
    return (
        <div className='block-messenger'>
            <InfoBlock />
            <MessageBlock />
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data.data
})

export default connect(mapStateToProps, {setData})(Messenger)
