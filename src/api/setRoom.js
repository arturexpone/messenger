import {socket} from "./socket";

export const API = {
    setRoom: (room) => {
        socket.emit('set room', room)
    },
}