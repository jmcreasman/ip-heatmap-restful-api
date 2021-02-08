'use strict';

// create App function
    module.exports = function(app) {
        var iplocations = require('../controllers/iplocationController');

// IPLocation Routes

// get and post request for /iplocations endpoints
        app
        .route("/iplocations")
        .get(iplocations.listAllIpLocations);
    };
