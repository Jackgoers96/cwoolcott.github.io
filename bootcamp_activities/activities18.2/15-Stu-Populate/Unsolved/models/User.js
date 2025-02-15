const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ],
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
