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
        <div className='login-form-wrapper'>
            <h1>Login</h1>

            <div className='login-form'>
                <div className='login-room-id'>
                    <input name='roomId'
                           className='login-form-input-id'
                           type='text'
                           placeholder='Enter room ID'
                           onChange={(e) => initRoomId(e.currentTarget.value)}
                           value={roomId}
                    />
                </div>

                <div>
                    <input name='userName'
                           type='text'
                           className='login-form-nickname'
                           placeholder='Enter your nickname'
                           onChange={(e) => initUserName(e.currentTarget.value)}
                           value={userName}
                    />
                </div>

                <div className='login-form__button-send-block'>
                    <NavLink to='/messenger' className='link'>
                        <div onClick={setUserAndRoom} className='login-send'>
                            S E N D
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    roomId: state.data.login.roomId,
    userName: state.data.login.userName
});

export default connect(mapStateToProps, {initRoomId, initUserName})(Login)

