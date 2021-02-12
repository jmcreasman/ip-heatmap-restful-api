const  IPLocation = require("../models/iplocationModel");

/**
 * Request IP address latitude and longitude geographic coordinates.
 * 
 * Each object consists of - id: Object ID, latitude: number and longitude: number.
 */
exports.listAllIpLocations = (req, res) => {
    IPLocation.find({}, (err, locations) => {
        if (err) {
            handleError(res.status(500), err.message, "Failed to get locations");
        } else {
            res.status(200).json(locations);
        }
    }).limit( 75000 );
};
