import {Constance} from "./constance";

export const setRooms = (rooms) => ({type: Constance.SET_ROOMS, rooms})
export const initRoomId = (id) => ({type: Constance.INIT_ROOM_ID, id})
export const initUserName = (name) => ({type: Constance.INIT_USER_NAME, name})