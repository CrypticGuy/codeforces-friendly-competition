var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const userSchema = new Schema({
    // `socialMediaHandles` is a map whose values are strings. A map's
    // keys are always strings. You specify the type of values using `of`.
    name: {type: String, required:true},
    username: {type: String, required:true},
    rank: {type: Number, required:true},
    quesMap: {
      type: Map,
      of: Boolean,
      default: {}
    },
    last_submission: {type:Number, default: 0},
});

var userModel = mongoose.model('userModel', userSchema)

module.exports = userModel