const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
    name: String,
    locationX: Number,
    locationY: Number,
    homeAreas:[
        {
            areaName: String,
            devices : [
                {
                    deviceName : String,
                    status: Boolean,
                    batteryLevel : Number,
                    options : [String]
                }
            ]
        }
    ]
});