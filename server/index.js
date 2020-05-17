const checkRoom = require('./utils/checkRoom').checkRoom;
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('./mongo/mongodb');
const Rooms = mongoose.Rooms();

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


        // console.log(data)
        // Rooms.create({roomId: data}).then(rooms => {
        //     console.log('создал новую руму в базе')
        //
        // })

    })


    // socket.on('send message', data => {
    //
    //     Users.create({
    //         roomId: data.roomId,
    //         userName: data.userName,
    //         message: data.message,
    //     }) .then(user => {
    //         console.log(user)
    //         io.emit('up message', user);
    //     })
    //         .catch(err => console.log(err))
    //
    // })

    // socket.on('get message', () => {
    //     Users.find()
    //         .then(messages => socket.emit('set messages', messages));
    // })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
});


server.listen(3001, () => {
});