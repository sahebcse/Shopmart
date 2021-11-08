const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
    default: 18,
  },
  profilePic: {
    type: String,
  },
  googleId: {
    type: String,
  },
  email: String,
  cart: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  address: Object,
  coinBalance: {
    type: Number,
    default: 100,
  },
  usedRef: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
