import {Constance} from "./constance";

const initialState = {
    login: {
        roomId: '',
        userName: ''
    },
    rooms: [],
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
        case Constance.INIT_ALL_ROOMS:
            return {
                ...state,
                rooms: action.rooms
            }
        default:
            return state;

    }
}