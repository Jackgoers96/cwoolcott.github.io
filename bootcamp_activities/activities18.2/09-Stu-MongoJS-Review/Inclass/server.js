// Your assignment is to define the routes below. Good luck!

const express = require("express");
const mongojs = require("mongojs");

const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "warmup";
const collections = ["books"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongo database
app.post("/submit", ({ body }, res) => {
  // Save the request body as an object called book
  const book = body;


  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false;

  db.books.save(book, function (error, saved) {
    if (error) {
      console.log(error);
      res.status(500);
    }
    else {
      res.send(saved);
    }
  })
});

// Find all books marked as read
app.get("/read", (req, res) => {
  console.log("read");
  db.books.find({ read: true }, function (error, found) {
    if (error) {
      console.log(error);
      res.status(500);
    }
    else {
      console.log("found", found);
      res.json(found);
    }
  });
});

// Find all books marked as unread
app.get("/unread", (req, res) => {
  console.log("unread");
  db.books.find({ read: false }, function (error, found) {
    if (error) {
      console.log(error);
      res.status(500);
    }
    else {
      console.log("found", found);
      res.json(found);
    }
  });

});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  const params = req.params;
  //61742a1fd0ed5b97e35a514e
  db.books.update({
    _id: mongojs.ObjectId(params.id)
  },
    {
      $set: {
        read: true
      }
    },
    function (error, edited) {
      if (error) {
        console.log(error);
        res.status(500);
      }
      else {
        res.send(edited);
      }
    });
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  const params = req.params;
  //61742a1fd0ed5b97e35a514e
  db.books.update({
    _id: mongojs.ObjectId(params.id)
  },
    {
      $set: {
        read: true
      }
    },
    function (error, edited) {
      if (error) {
        console.log(error);
        res.status(500);
      }
      else {
        res.send(edited);
      }
    });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
