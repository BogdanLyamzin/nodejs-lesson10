const express = require("express");

const router = express.Router();

router.get("/", async(req, res, next)=> {
    const result = [
        {
            _id: "4rretry",
            name: "User name"
        },
        {
            _id: "4rdefry",
            name: "User name 2"
        }
    ];

    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    });
})

module.exports = router;