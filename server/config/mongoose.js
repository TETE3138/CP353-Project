import mongoose from 'mongoose';

module.exports = function () {
    var config = {
        mongoUri: 'mongodb://localhost/notebookvalue',
        // or use 
        // mongoUri: 'mongodb://admin:password@localhost:27017/notebookvalue',
        debug: true,
        sessionSecret: 'dev_secret_key'
    }

    mongoose.set('debug', config.debug);

    const db = mongoose.connect(config.mongoUri, {
        useMongoClient: true
        /* other options */
    });

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    require('../app/models/notebook.model');
    return db;
} 
