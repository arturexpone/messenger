import React, {useEffect} from "react";
import {connect} from "react-redux";
import {API} from "../../api/api";
import {NavLink} from "react-router-dom";
import {initRoomId, initUserName} from "../../redux/ac";
import {socket} from "../../api/socket";


const Login = (props) => {

    const {initRoomId, roomId, initUserName, userName} = props;

    let userNames = [];

    useEffect(() => {
       API.getAllUserName();
       socket.on('set users name', names => {
           userNames = [...names];
           if (userNames.includes(userName)) {
              alert('Такой ник уже есть, Вася!')
       }});
    });


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>

                <div>
                    <input name='roomId'
                           type='text'
                           placeholder='Enter room ID'
                           onChange={(e) => initRoomId(e.currentTarget.value)}
                           value={roomId}
                    />
                </div>

                <div>
                    <input name='userName'
                           type='text'
                           placeholder='Enter your nickname'
                           onChange={(e) => initUserName(e.currentTarget.value)}
                           value={userName}
                    />
                </div>

                <div>
                    <NavLink to='/messenger'>
                        <button onClick={() => API.setRoom(roomId)}>Send data</button>
                    </NavLink>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    roomId: state.data.login.roomId,
    userName: state.data.login.userName
});

export default connect(mapStateToProps, {initRoomId, initUserName})(Login)

