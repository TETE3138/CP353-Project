import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {
        type:String,
        unique:true,
        required:'Username is required',
        trim:true
    },
    password: {
        type: String,
        required: 'Password is required',
        validate: [(password) => {
            return password && password.length >= 1;
        }, 'Password cannot be empty']
    },
    isadmin: {
        type: Number,
        default: 0
    },
    salt: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
 }


});
UserSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});
UserSchema.methods.hashPassword = function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
}
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
}

mongoose.model('User', UserSchema);

