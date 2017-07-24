var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var task = new Schema({
    str: String
});

var Task = mongoose.model('task',task);