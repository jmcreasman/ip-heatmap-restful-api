'use strict';

module.exports = function(app) {
    var iplocations = require('../controllers/iplocationController');

// IPLocation Routes

// get request for /iplocations endpoints
    app
    .route("/iplocations")
    .get(iplocations.listAllIpLocations);
};
