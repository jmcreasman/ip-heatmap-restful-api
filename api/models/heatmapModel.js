'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const HeatmapSchema = new Schema({
        _id: {
            type:Schema.Types.ObjectId,
            required:true
        },
        latitude:{
            type:Number,
            required:true
        },
        longitude: {
            type:Number,
            required:true
        }
    });

// create and export model
module.exports = mongoose.model("heatmapModel", HeatmapSchema);
