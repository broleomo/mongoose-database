const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name : { type: String, required: true, unique: true},
  color: String,
  age: Number,
  weight: Number,
  food:[{
    amount: {type: Number},
    measure: {type: String, lowercase: true, trim: true},
    brand: {type: String}
  }],
});

const Cats = mongoose.model('Cats',catSchema);

module.exports = Cats;
