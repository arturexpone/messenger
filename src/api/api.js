import {socket} from "./socket";

export const API = {
    setRoom: (room) => {
        socket.emit('set room', room)
    },
    getAllRooms: () => {
        socket.emit('get rooms');
    },
    getAllUserName: () => {
        socket.emit('get all user name');
    },
}