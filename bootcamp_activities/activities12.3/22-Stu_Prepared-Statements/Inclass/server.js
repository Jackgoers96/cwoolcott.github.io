const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Query database

let deletedRow = 2;
let deletedRowTwo = 3;

db.query(`DELETE FROM favorite_books WHERE id = ? OR id = ?`, [deletedRow, deletedRowTwo], (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Query database
db.query('SELECT * FROM favorite_books', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
