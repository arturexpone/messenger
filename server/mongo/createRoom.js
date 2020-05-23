const roomSchema = require('./mongodb').Rooms();

module.exports.createRoom = (roomId) => {
    return roomSchema.create({
        roomId,
    })
}