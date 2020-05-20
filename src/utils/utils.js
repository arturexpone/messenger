import React from "react";

export const mapUsersAndMessagesInRoom = (array, roomId = null, refOnClick = null) => {
    let activeUsersInRoom =
        array.map((el, i) => (
            <span key={i}
                  className={el === roomId ? 'active' : ''}
                  onClick={refOnClick ? () => refOnClick(el) : null}
            >
                {el}
            </span>));
    return activeUsersInRoom;
}

export const filterAllRoomsAndUsers = (array, toggle = 'rooms') => {
    const rooms = toggle === 'rooms' ? array.map(r => r.roomId) : array.map(r => r.userName);

    let arrOfStr = rooms.filter(r => +r !== +r).sort();
    let arrOfNum = rooms.filter(r => +r === +r).sort((prev, next) => prev - next);

    let lengthArray = arrOfStr.length > arrOfNum.length ? arrOfStr.length : arrOfNum.length;

    let sortArrOfStr = [];
    let sortArrOfNum = [];


    for (let i = 0; i < lengthArray; i++) {

        if (arrOfStr[i] !== arrOfStr[i + 1]) {
            sortArrOfStr.push(arrOfStr[i]);
        }
        if (arrOfNum[i] !== arrOfNum[i + 1]) {
            sortArrOfNum.push(arrOfNum[i]);
        }
    }


    return sortArrOfNum.concat(sortArrOfStr)
}

export const utils = (array, roomId, toggle) => {
    let objUsersInRoom = array.filter(el => el.roomId === roomId);
    return toggle === 'messageInRoom'
        ? objUsersInRoom
        : filterAllRoomsAndUsers(objUsersInRoom, 'users')
}

export const renderMessageInRoom = (array, userName) => {
    const spliceStrArray = array.filter(el => el.message != ' ');
    return spliceStrArray.map(el => (
        <div className={el.userName === userName ? 'block-message__block my-message' : 'block-message__block'}>
            <div>
                <div className='block-message__user-name'>
                    <span>{el.userName}</span>
                </div>

                <div>
                    <p className='block-message__message'>{el.message}</p>
                </div>
            </div>
        </div>
    ));
}
