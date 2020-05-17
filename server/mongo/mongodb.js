const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://arturexpone:user4dfd40@cluster0-y0sht.mongodb.net/messenger?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.log(err));


module.exports = {
    mongoose: require('mongoose'),
    connect() {
        this.mongoose.connect(
            'mongodb+srv://arturexpone:user4dfd40@cluster0-y0sht.mongodb.net/messenger?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('Connected to mongodb'))
            .catch(err => console.log(err))
    },
    Rooms() {
        const roomsSchema = new mongoose.Schema({
            roomId: {
                type: String,
                required: true
            }
        });

        return this.mongoose.model('all-rooms', roomsSchema);
    },
    AllMessages() {
        const allMessagesSchema = new mongoose.Schema({
            roomId: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            userName: {
                type: String,
                required: true
            },
        });

        return this.mongoose.model('all-messages', allMessagesSchema);;
    },
    AllUsersInRoom() {
        const AllUsersInRoomSchema = new mongoose.Schema({
            userName: {
                type: String,
                required: true
            },
            roomId: {
                type: String,
                required: true
            }
        });

        return this.mongoose.model('all-users-in-room', AllUsersInRoomSchema);;
    },
    AllUsers () {
        const AllUsersSchema = new mongoose.Schema({
            userName: {
                type: String,
                required: true
            }
        });

        return this.mongoose.model('users', AllUsersSchema);
    },
}

