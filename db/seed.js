const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentSchema = new Schema (
    { 
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        recipient: {
            type: String
        },
        description: {
            type: String
        }
    })

const Presents = mongoose.model('Presents', presentSchema);

module.exports = Presents;