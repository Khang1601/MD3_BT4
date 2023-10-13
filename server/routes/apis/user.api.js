var express = require('express');

var router = express.Router();


router.get("/", () => {
    console.log("hello user get")
})

router.post("/", () => {
    console.log("hello user post")
})

module.exports = router;