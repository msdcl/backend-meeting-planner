'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let notification = new Schema({
  id: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  userId: {
    type: String,
  },
  text: {
    type: String,
  },
  isSeen:{
    type:Boolean
  }


})


mongoose.model('Notification', notification);