import {Constance} from "./constance";
import {socket} from "../api/socket";

export const setRooms = (rooms) => ({type: Constance.SET_ROOMS, rooms})
export const initRoomId = (id) => ({type: Constance.INIT_ROOM_ID, id})
export const initUserName = (name) => ({type: Constance.INIT_USER_NAME, name})
export const initAllRooms = (rooms) => ({type: Constance.INIT_ALL_ROOMS, rooms})