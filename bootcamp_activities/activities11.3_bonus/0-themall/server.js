const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const middleware = (req, res, nextABC) => {
    console.log(`MIDDLEWARE ${req.method} ${req.path}`);
    //nextABC();

}

app.use(middleware);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup public folder for images, js, css
app.use(express.static('public'));


//ROUTES

//API 
require("./routes/apiRoutes")(app);


// HTML 
require("./routes/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


