const checkRoom = require('./utils/checkRoom').checkRoom;
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('./mongo/mongodb');
const Rooms = mongoose.Rooms();
const AllUsersName = mongoose.AllUsers();

mongoose.connect();

io.on('connection', socket => {

    socket.on('set room', data => {
        Rooms.find()
            .then(rooms => {
                if (!rooms.find(room => room.roomId === data)) {
                    Rooms.create({roomId: data}).then(room => {
                        console.log('создал новую руму в базе');
                        return io.emit('get room', room.roomId);
                    })
                }
                return [];
            });
    });

    socket.on('get rooms', data => {
        Rooms.find()
            .then(rooms => {
                return io.emit('sent all rooms', rooms);
                    })
            });

    socket.on('get all user name', data => {
        AllUsersName.find().then(users => {
            socket.emit('set users name', users.map(u => u.userName));
        })
    });

    socket.on('disconnect', () => {
        console.log('User disconnected')
    });
});


server.listen(3001, () => {
});