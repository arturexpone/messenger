import {socket} from "./socket";

export const API = {
    login: (userName, roomId) => {
        socket.emit('login', {userName, roomId})
    },
    sendMessage: (roomId, userName, message) => {
        socket.emit('send message', {roomId, userName, message})
    },
    setRoom: (room) => {
        socket.emit('set room');
    }
}