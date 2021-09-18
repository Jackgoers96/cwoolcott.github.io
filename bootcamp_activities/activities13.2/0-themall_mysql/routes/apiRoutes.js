//var storeData = require("../data/storeData.js");
const db = require("../db");

module.exports = function (app) {
    app.get("/api/stores", function (req, res) {
        const sql = `SELECT * FROM stores ORDER BY name`;

        db.query(sql, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }

            res.json(rows)
        });
    });

    // var newStore = {
    //     storeID: $("#storeID").val().trim(),
    //     storeName: $("#storeName").val().trim(),
    //     storeDescription: $("#storeDescription").val().trim(),
    //     status: $("#status").val().trim()
    // };

    app.post("/api/stores", function (req, res) {
        console.log(req.body);
        const sql = `INSERT INTO stores (name, description) VALUES (?, ?)`;
        const params = [req.body.storeName, req.body.storeDescription];

        db.query(sql, params, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            res.json(true);
        })

        //storeData.push(req.body);
        //res.json(true);
    });

    // var storeUpdate = {
    //     storeID: 3,
    //     status: "open"
    // };


    app.post("/api/storeupdate", function (req, res) {

        const storeUpdateId = req.body.storeID;
        const storeStatus = req.body.status === 'open' ? 'closed' : 'open';

        const sql = `UPDATE stores SET status = ? WHERE id = ?`;
        const params = [storeStatus, storeUpdateId];

        db.query(sql, params, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!db_result.affectedRows) {
                res.json({ message: 'No Store Found' })
            }
            else {
                res.json({ message: 'success' });
            }
        })


    });

    app.put("/api/stores", function (req, res) {

        const sql = `UPDATE stores SET name = ?, description = ? WHERE id = ?`;
        const params = [req.body.storeName, req.body.storeDescription, req.body.storeID];

        db.query(sql, params, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!db_result.affectedRows) {
                res.json({ message: 'No Store Found' })
            }
            else {
                res.json(req.body);
            }
        })
    });

    app.get("/api/getstore/:storeID", function (req, res) {

        const storeID = req.params.storeID;

        const sql = `SELECT * FROM stores WHERE id = ?`;

        db.query(sql, storeID, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!rows) {
                res.status(400).json({ message: 'No Store Found' })
            }
            else {
                res.json(rows[0]);
            }

        });
    });



    app.delete("/api/stores", function (req, res) {

        const storeUpdateId = req.body.storeID;

        const sql = `DELETE FROM stores WHERE id = ?`;

        db.query(sql, storeUpdateId, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!db_result.affectedRows) {
                res.json({ message: 'No Store Found or Deleted' })
            }
            else {
                res.json({ message: 'success' });
            }
        })
    });


};
