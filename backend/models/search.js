const mongoose = require('mongoose');

const searchSchema=mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  }
},{timestamps: {
  createdAt: 'created_at',
    updatedAt: 'updated_at'
}});

module.exports = mongoose.model('Search',searchSchema);

