const router = require("express").Router();
const exercise = require("../models/exercise.js");

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