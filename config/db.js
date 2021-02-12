const  mongoose = require("mongoose");

const  uri = "mongodb+srv://jmcreasman:hobbit89@cluster0.fgaft.mongodb.net/internet_heatmap?retryWrites=true&w=majority"

const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};

mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
err  => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});
