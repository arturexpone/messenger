module.exports.checkRoom = (data, rooms) => {
    return [rooms, ...rooms.filter(room => room.roomId !== data)];
}