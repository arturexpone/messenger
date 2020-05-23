import React from "react";

export const mapUsersAndMessagesInRoom = (array, roomId = null, refOnClick = null, toggle, userName) => {
    let activeUsersInRoom = array.filter(el => el !== ' ');
    activeUsersInRoom = activeUsersInRoom.map((el, i) => {
        return (
            <div onClick={refOnClick ? () => refOnClick(el) : null}
                 className={toggle === 'rooms'
                     ? 'block-info__ui_all_rooms current-rooms'
                     : 'block-info__ui_all_rooms'}>
                <div className='block-info__room-name'>
                    <span key={i}
                          className={el === roomId
                              ? 'block-room-id active'
                              : el === userName ? 'block-room-id active-user-name'
                                  : 'block-room-id'}>
                    {el}
                    </span>
                </div>

                <div>
                    <img src="https://sun9-63.userapi.com/c852024/v852024456/17092e/HnaTBKfCVOA.jpg" alt=""/>
                </div>


            </div>)
    });
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


    return spliceStrArray.map((el, i) => (
        <div className={el.userName === userName ? 'message-model-block my-message' : 'message-model-block'}>

            <div className='message-info-block'>
                <div className='user-name'>
                    <span>{el.userName}</span>
                </div>
                {/*<div className='time-send-message'>*/}
                {/*    <span>{el.currentDate} AM</span>*/}
                {/*</div>*/}
            </div>


            <div className={el.userName === userName ? 'is-my-message-block' : 'not-my-message-block'}>
                <div className={el.userName === userName ? 'is-my-message' : 'not-my-message'}>
                    <p className='block-message__message'>{el.message}</p>
                </div>



                {/*<div className='message-info-block'>*/}
                {/*    <div className='user-name'>*/}
                {/*        <span>{el.userName}</span>*/}
                {/*    </div>*/}
                {/*    <div className='time-send-message'>*/}
                {/*        <span>{el.currentDate}</span>*/}
                {/*    </div>*/}
                {/*</div>*/}



            </div>
        </div>






        // <div key={i} className={el.userName === userName
        //     ? 'block-message__block my-message'
        //     : 'block-message__block'}>
        // <div className='message-and-date'>
        //         <div className='message-itself'>
        //             <p className='block-message__message'>{el.message}</p>
        //         </div>
        //
        //         <div>
        //             <span>{el.currentDate}</span>
        //         </div>
        // </div>
        //
        //         <div>
        //             <div className='block-message__user-name'>
        //                 <span>{el.userName}</span>
        //             </div>
        //         </div>
        // </div>
    ));
}



// <div className='message-model-block'>
//     <div className='avatar'>
//         <img src="" alt=""/>
//     </div>
//     <div className='message-block'>
//         <div className='message'>
//             <p className='block-message__message'>{el.message}</p>
//         </div>
//         <div className='message-info-block'>
//             <div className='user-name'>
//                 <span>{el.userName}</span>
//             </div>
//             <div className='time-send-message'>
//                 <span>{el.currentDate}</span>
//             </div>
//         </div>
//     </div>
// </div>


// .message-model-block {
//     display: flex;
//     flex-direction: row;
// }
//
// .message-block {
//     display: flex;
//     flex-direction: column;
// }
//
// .message-info-block {
//     display: flex;
//     flex-direction: row;
// }
//
