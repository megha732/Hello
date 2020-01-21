const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'Inactive'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
