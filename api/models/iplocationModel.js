'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IPLocationSchema = new Schema({});

module.exports = mongoose.model("IPv4_internet_addresses", IPLocationSchema, "IPv4_internet_addresses");
