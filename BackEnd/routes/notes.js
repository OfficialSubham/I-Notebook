const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    let obj = {
        name: "subham",
        class: "XII"
    }

    response.json(obj)
    
})

module.exports = router
