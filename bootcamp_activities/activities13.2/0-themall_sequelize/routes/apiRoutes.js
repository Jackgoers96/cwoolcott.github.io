//var storeData = require("../data/storeData.js");
//const db = require("../db");
const Store = require('../models/Store');

module.exports = function (app) {
    app.get("/api/stores", async function (req, res) {
        try {
            const storeData = await Store.findAll();
            res.json(storeData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

    // var newStore = {
    //     storeID: $("#storeID").val().trim(),
    //     storeName: $("#storeName").val().trim(),
    //     storeDescription: $("#storeDescription").val().trim(),
    //     status: $("#status").val().trim()
    // };

    app.post("/api/stores", async function (req, res) {

        const newBody = {
            name: req.body.storeName,
            description: req.body.storeDescription
        };

        try {
            const storeData = await Store.create(newBody);
            res.json(storeData);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'error with submission' });
        }
    });

    // var storeUpdate = {
    //     storeID: 3,
    //     status: "open"
    // };


    app.post("/api/storeupdate", async function (req, res) {

        const storeUpdateId = req.body.storeID;
        const storeStatus = req.body.status === 'open' ? 'closed' : 'open';

        try {
            const storeData = await Store.update(
                {
                    status: storeStatus
                },
                {
                    where: {
                        id: storeUpdateId
                    }
                }
            );

            if (!storeData) {
                res.json({ message: 'No Store Found' });
            }
            else {
                res.json(storeData);
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

    app.put("/api/stores", async function (req, res) {


        const storeID = req.body.storeID;

        const newBody = {
            name: req.body.storeName,
            description: req.body.storeDescription
        };

        try {
            const storeData = await Store.update(
                newBody,
                {
                    where: {
                        id: storeID
                    }
                }
            );

            if (!storeData) {
                res.json({ message: 'No Store Found' });
            }
            else {
                res.json(storeData);
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

    app.get("/api/getstore/:storeID", async function (req, res) {

        try {
            const storeData = await Store.findByPk(req.params.storeID);
            res.json(storeData);
        }
        catch (err) {
            res.status(500).json(err);
        }

    });


    app.delete("/api/stores", async function (req, res) {

        const storeUpdateId = req.body.storeID;

        try {

            const storeData = await Store.destroy({
                where: {
                    id: storeUpdateId
                }
            });

            res.json(storeData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });


};
