var storeData = require("../data/storeData.js");

module.exports = function (app) {
    app.get("/api/stores", function (req, res) {
        res.json(storeData)
    });

    // var newStore = {
    //     storeID: $("#storeID").val().trim(),
    //     storeName: $("#storeName").val().trim(),
    //     storeDescription: $("#storeDescription").val().trim(),
    //     status: $("#status").val().trim()
    // };

    app.post("/api/stores", function (req, res) {
        console.log(req);
        storeData.push(req.body);
        res.json(true);
    });

    // var storeUpdate = {
    //     storeID: 3,
    //     status: "open"
    // };

    app.post("/api/storeupdate", function (req, res) {

        var storeUpdate = req.body;
        //we need to get the correct object
        for (var i = 0; i < storeData.length; i++) {
            console.log(storeData[i].storeID, storeUpdate.storeID)
            if (storeData[i].storeID == storeUpdate.storeID) {

                storeData[i].status = (storeData[i].status === 'open') ? 'closed' : 'open';

                break; //Stop this loop, we found it!
            }

        }


        res.json(true);


    });


};
