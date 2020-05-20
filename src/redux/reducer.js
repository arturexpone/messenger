import {Constance} from "./constance";

const initialState = {
    data: [],
    login: {
        roomId: '',
        userName: ''
    },
    newMessage: ''

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constance.INIT_ROOM_ID:
            return {
                ...state,
                login: {...state.login, roomId: action.id}
            }
        case Constance.INIT_USER_NAME:
            return {
                ...state,
                login: {...state.login, userName: action.name}
            }
        case Constance.SET_DATA:
            return {
                ...state,
                data: action.data
            }
        case Constance.SET_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.message
            }
        default:
            return state;

    }
}