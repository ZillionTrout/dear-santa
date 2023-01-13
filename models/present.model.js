const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    min:0
  },
  recipient: {
    type: String,
    required: true
  }
});

const Present = mongoose.model('Present', presentSchema);
module.exports = Present;