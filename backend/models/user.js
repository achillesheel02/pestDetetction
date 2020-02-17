const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
    required: true},
  farms: [{
    name: String,
    location: {
      longitude: Number,
      latitude: Number,
    },
    cropsPlanted: [String]
  }],
  firstName: {
    type: String,
    required: false},
  lastName: {
    type: String,
    required: false},
  gender: {
    type: String,
    required: false},
  dateOfBirth: {
    type: Date,
    required: false}
},
  {timestamps: {
  createdAt: 'created_at',
    updatedAt: 'updated_at'
}}
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);
