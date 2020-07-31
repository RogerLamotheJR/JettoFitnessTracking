const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name of cardio "
  },
  distance: {
    type: Number,
    required: "Enter how many miles you plan to go"
  },
  duration: {
    type: Number,
    required: "how many minutes you plan to workout"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;