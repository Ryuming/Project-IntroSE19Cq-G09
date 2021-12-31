const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  _id:{ type: Number},
  title: { type: String, require: true },
  category: { type: String },
  memberFeedback: { type: String, maxlength: 255 },
  view: { type: String, unique: true },
  time: { type: String, require: true },
}, {
  _id:false,
  timestamps: true,
});

module.exports = mongoose.model('data', dataSchema);