const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  _id:{ type: Number},
  username: { type: String, require: true },
  password: { type: String },
  email: { type: String, maxlength: 255 },
  decription: { type: String, unique: true },
  fullname: { type: String, require: true },
  gender: { type: String, maxlength: 255 },
  date_of_birth: { type: Date, maxlength: 255 },
  address: { type: String, maxlength: 255 },
  phone_number: { type: String, maxlength: 255 },
  total_top: { type: String, maxlength: 255 },
  role: { type: String, maxlength: 255 },
  badge_id: { type: String, maxlength: 255 },
}, {
  _id:false,
  timestamps: true,
});

//Custom query helper


/* //add flugin 
mongoose.plugin(slug);
 CourseSchema.plugin(AutoIncrement)

//soft delete
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});
 */

module.exports = mongoose.model('User', UsersSchema);