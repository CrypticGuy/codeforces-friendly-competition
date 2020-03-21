const express = require('express')
const router = express.Router()

var userModel = require('../models/user')

router.get('/', function (req, res) {
    let name = req.query.name
    let username = req.query.username
    let rank = req.query.rank
    console.log(`${name} ${username} ${rank}`)
    userModel.create({name: name, username:username, rank:rank}, function(err, data) {
        if (err) console.error(err)
        console.log(data)
    })
    res.send(`Update ${username}`)
})

module.exports = router