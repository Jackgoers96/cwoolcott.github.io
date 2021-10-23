const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// * username: A string that will be be required, and also trimmed.
// * password: A string that will be required, trimmed, and at least 6 characters.
// * email: A string that must be a valid email address and unique in our collection.
// * userCreated: A date that will default to the current date.

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "Username is required!",
  },
  password: {
    type: String,
    required: "Password is required",
    trim: true,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: "Email must be unique"
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
