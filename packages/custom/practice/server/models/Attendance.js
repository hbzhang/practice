/**
 * Created by hbzhang on 10/13/14.
 */

'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Post Schema
 */
var AttendanceSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    team: {
        type: Schema.ObjectId,
        ref: 'Team'
    }
});

/**
 * Validations
 */
AttendanceSchema.path('team').validate(function(message) {
    return message.length;
}, 'Team cannot be blank');

/**
 * Statics
 */
var populateQuery = [{path:'team', select:'name members'}];

AttendanceSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate(populateQuery).exec(cb);
};
AttendanceSchema.set('versionKey', false);
mongoose.model('Attendance', AttendanceSchema);
