const  IPLocation = require("../models/iplocationModel");

// Generic error handler used by all future endpoints.
const handleError = (res, reason, message, code) => {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

/**
 * Request IP address latitude and longitude geographic coordinates.
 * 
 * Each object consists of - id: Object ID, latitude: number and longitude: number.
 */
exports.searchByLongitude = (req, res) => {
    let min = Number(req.query.minLon);
    let max = Number(req.query.maxLon);

    IPLocation.find({ longitude: { $gte : min , $lte : max } }, (err, locations) => {
        if (err) {
            handleError(res, err.message, "Failed to get locations");
        } else {
            res.status(200).json(locations);
        }
    });

    // let body = '';
    // IPLocation.find({ latitude: { $gte : -90 , $lte : -85 } } ).
    // cursor().
    // on('data', (chunk) => {
    //     body += chunk;
    // }).
    // on('end', () => {
    //     // const data = JSON.stringify(body);
    //     // console.log(data);
    //     // res.status(200).json(data);
    //     res.status(200).send(body);
    //     console.log("done");
    // });
};
