const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    let obj  = {
        hello: "dojkhadad",
        bjaka: "8374ksdljk"
    }

    response.json(obj)
})

module.exports = router
