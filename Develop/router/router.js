const router = require("express").Router();

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
