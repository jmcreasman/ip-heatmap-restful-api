const  IPLocation = require("../models/iplocationModel");

// Generic error handler used by all future endpoints.
const handleError = (res, reason, message, code) => {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

/**
 * Search for IP address geographic coordinates based on a range of longitudes.
 * 
 * Each object consists of - id: Object ID, latitude: number and longitude: number.
 * 
 * @param minLon: The minimal longitude number to search by in the range.
 * @param maxLon: The maximum longitude number to search by in the range.
 */
exports.searchByLongitude = (req, res) => {
    let min = Number(req.query.minLon);
    let max = Number(req.query.maxLon);
    let body = [];
    IPLocation.find({ longitude: { $gte : min , $lte : max } }, {'_id': 0} ).
    stream().
    on('data', (chunk) => {
        body.push(chunk);
    }).
    on('end', () => {
        res.status(200).send(body);
        console.log("DONE!");
    });
};
