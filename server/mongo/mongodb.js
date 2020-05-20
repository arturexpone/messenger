module.exports = {
    mongoose: require('mongoose'),
    connect() {
        this.mongoose.connect(
            'mongodb+srv://arturexpone:user4dfd40@cluster0-y0sht.mongodb.net/messenger?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('Connected to mongodb'))
            .catch(err => console.log(err))
    },
    AllMessages() {
        const allMessagesSchema = new this.mongoose.Schema({
            roomId: {
                type: String,
                required: false
            },
            message: {
                type: String,
                required: false
            },
            userName: {
                type: String,
                required: false
            },
        });

        return this.mongoose.model('all-messages', allMessagesSchema);
    },
}

