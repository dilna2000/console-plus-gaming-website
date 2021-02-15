const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    desc: { type: String, required: true }
   
}, {
    timestamps: true,
});

const Feedback = mongoose.model('feedbacks', feedbackSchema, 'feedbacks' );

module.exports = Feedback;
