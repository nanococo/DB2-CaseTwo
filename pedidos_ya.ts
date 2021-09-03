const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurant = new Schema({
    name: String,
    locationX: Number,
    locationY: Number,
    radius: Number,
    rating: Number,
    foodTypes: [String], //array of string defining types of food provided by the restaurant
    freeDelivery: Boolean,
    deliveryTime: Number
});
