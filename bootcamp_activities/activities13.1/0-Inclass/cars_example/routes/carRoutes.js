const router = require('express').Router();
const { removeAttribute } = require('../../../04-Stu_Models/Inclass/models/Book');
const Cars = require('../models/Cars')

router.post('/', (req, res) => {

    console.log(req.body);

    Cars.create({
        make: req.body.make,
        model: req.body.model,
        yearMade: req.body.yearMade
    })
        .then((newCar) => {
            res.json(newCar)
        })

});

module.exports = router;