const router = require("express").Router();
const exercise = require("../models/exercise.js");


router.get("/exercise", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("stats.js", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});


router.get("/api/workouts", ({body}, res) => {
    exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise =>{
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({body}, res) => {
    exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise =>{
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    exercise.create(body)
   .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    console.log (params, body)
    exercise.findByIdAndUpdate(params.id,{ $push: { exercises: body} })
   .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//default to home
router.get("*", function(req, res){
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

module.exports= router