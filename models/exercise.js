const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[
    {
      type: {
        type: String,
        trim: true,
      },

      name: {
        type: String,
        trim: true,
        required: "Enter a name of Workout"
      },
      weight: {
        type: Number,
        required: "Enter how much weight you plan to use"
      },
      sets: {
        type: Number,
        required: "Enter how set you plan to do"
      },
      reps: {
        type: Number,
        required: "Enter how much reps you plan to do"
      },
      duration: {
        type: Number,
        required: "Enter how much resistance and duration you would like "
      },
      distance:{
        type: Number,
        required: "Enter how much resistance and distance you would like "
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
