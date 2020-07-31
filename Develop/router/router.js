const router = require("express").Router();
const exercise = require("../models/exercise.js");


router.get("/exercise", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("stats.js", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});

//default to home
router.get("*", function(req, res){
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("/exercise", ({body}, res) => {
    exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise =>{
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/exercise", ({body}, res) => {
    exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise =>{
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/exercise", ({body}, res) => {
    exercise.create(body)
    TouchEvent(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});