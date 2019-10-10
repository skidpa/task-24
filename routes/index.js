const express = require('express');
const router = express.Router();

const data = require('../public/data.json');


router.get("/", (req, res) => {
    console.log("Request for home recieved");
    //res.render('index');
});

router.get('/data', (req, res) => {
    res.json(data);
})

module.exports = router;
