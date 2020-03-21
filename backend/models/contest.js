var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const contestSchema = new Schema({

    contestName: {type: String, required:true},
    date: {type: Date, required:true},
    quesList: [String],
    userList: [String],
});

var contestModel = mongoose.model('contestModel', contestSchema)

module.exports = contestModel