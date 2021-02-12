const  IPLocation = require("../models/iplocationModel");

/**
 * Request IP address latitude and longitude geographic coordinates.
 * 
 * Each object consists of - id: Object ID, latitude: number and longitude: number.
 */
exports.listAllIpLocations = (req, res) => {
    IPLocation.find({}, (err, locations) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(locations);
    }).limit( 150000 );
};
