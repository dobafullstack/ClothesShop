const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => {
        console.log('DB is connected!');
    }).catch(err => {
        console.error(err);
    })
};

module.exports = connect;