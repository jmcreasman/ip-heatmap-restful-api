const  IPLocation = require("../models/iplocationModel");

// Generic error handler used by all endpoints.
const handleError = (res, reason, message, code) => {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

/**
 * Request IP address latitude and longitude geographic coordinates.
 * 
 * Each object consists of - id: Object ID, latitude: number and longitude: number.
 */
exports.listAllIpLocations = (req, res) => {
    IPLocation.find({}, (err, locations) => {
        if (err) {
            handleError(res, err.message, "Failed to get locations");
        } else {
            res.status(200).json(locations);
        }
    }).limit( 75000 );
};
