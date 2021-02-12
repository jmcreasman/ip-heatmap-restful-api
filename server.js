'use strict'

require("./config/db");
const  express = require("express");
const  bodyParser = require("body-parser");
const  app = express();
const cors = require('cors')
const routes = require('./api/routes/iplocationRoutes');
const  port = process.env.PORT || 3000;

app.use(cors())
routes(app);
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
