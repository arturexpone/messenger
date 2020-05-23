import {Constance} from "./constance";

export const initRoomId = (id) => ({type: Constance.INIT_ROOM_ID, id})
export const initUserName = (name) => ({type: Constance.INIT_USER_NAME, name})
export const setData = (data) => ({type: Constance.SET_DATA, data})
export const setNewMessage = (message) => ({type: Constance.SET_NEW_MESSAGE, message})
