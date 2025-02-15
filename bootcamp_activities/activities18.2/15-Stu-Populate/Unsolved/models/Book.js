const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    rating: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
