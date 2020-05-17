import {socket} from "./socket";
import {setRooms} from "../redux/ac";

const getRoomThunk = (room) => (dispatch) => {
    socket.on('get room', data => {
        dispatch(setRooms(data));
    })
}