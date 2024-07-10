
const mongoose = require('mongoose');

const reviewScehma = new mongoose.Schema({

    userName:{type: String, required:true},
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
})

 mongoose.model('Review', reviewScehma);
