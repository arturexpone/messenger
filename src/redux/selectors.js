import {createSelector} from "reselect";

export const getMessageInRoom = (state) => {
    return state.data.messageInRoom
}

export const getRoomId = (state) => {
    return state.data.login.roomId
}
export const getAllMessages = (state) => {
    return state.data.allMessages
}
export const getInitUserName = (state) => {
    return state.data.login.userName
}

export const messageInRoom = createSelector(getMessageInRoom,(mess) => {
    return mess
})