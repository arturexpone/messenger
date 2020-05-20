import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {initRoomId, initUserName} from "../../redux/ac";
import {API} from "../../api/api";


const Login = (props) => {
    const {initRoomId, roomId, initUserName, userName} = props;

    const setUserAndRoom = () => {
        API.login(userName, roomId)
        localStorage.setItem('userName', userName);
        localStorage.setItem('roomId', roomId);
    }

    return (
        <div>
            <h1>Login</h1>
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
                        <button onClick={setUserAndRoom}>Send data</button>
                    </NavLink>
                </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    roomId: state.data.login.roomId,
    userName: state.data.login.userName
});

export default connect(mapStateToProps, {initRoomId, initUserName})(Login)

