// import IPLocation Model
const  IPLocation = require("../models/iplocationModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllIpLocations function - To list all IP locations
exports.listAllIpLocations = (req, res) => {
IPLocation.find({}, (err, locations) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(locations);
});
};
