import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var LikeSchema = new Schema({
    nbid: String,
    username: String,
});
mongoose.model('Like', LikeSchema);