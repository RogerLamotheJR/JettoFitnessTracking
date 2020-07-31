const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name of exercise"
  },
  weight: {
    type: Number,
    required: "Enter how much weight you plan to use"
  },
  sets: {
    type: Number,
    required: "Enter how many set you plan to do"
  },
  reps: {
    type: Number,
    required: "Enter how many reps you plan to do"
  },
  duration: {
    type: Number,
    required: "Enter how much resistance and duration you would like "
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
