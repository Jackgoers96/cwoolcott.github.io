const express = require('express');
const sequelize = require('./config/connection')

const Cars = require('./models/Cars')
const routes = require('./routes/carRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes)


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log("Listening on PORT:" + PORT));
})