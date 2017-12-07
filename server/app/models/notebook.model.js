import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var NotebookSchema = new Schema({
    brand: String,
    nbname: String,
    price: Number,
    cpu: String,
    gpu: String,
    os: String,
    display: Number,
    ram: Number,
    hdd: Number,
    img_url: String,
    insert_by: {
        type: String,
        default: "Admin"
    },
    insert_date: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Notebook', NotebookSchema);