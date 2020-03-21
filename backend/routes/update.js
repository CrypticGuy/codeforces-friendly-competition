const express = require('express')
const router = express.Router()
const axios = require('axios')

let userModel = require('../models/user')

router.get('/', function (req, res) {
    let username = req.query.username
    console.log(username)
    //userModel.findOne({'username': 'binaryblood'}, function(err, data) {
    userModel.findOne({'username': username}, 'last_submission quesMap', function(err,data) {
        if (err) console.error(err)
        console.log(data)
        if (data != null) {
            axios
            .get(`http://codeforces.com/api/user.status?handle=${username}&from=${data.last_submission+1}`)
            .then((resp) => {
                console.log("HERE!")
                let resultArray = resp.data.result
                let updated_last_submission = data.last_submission + resp.data.result.length
                let newQuesMap = {}
                resultArray.forEach((elem, i) => {
                    //console.log(elem)
                    if (elem.verdict === 'OK') {
                        newQuesMap[`${elem.problem.contestId}${elem.problem.index}`] = true
                    }
                })
                //console.log(newQuesMap)
                return [updated_last_submission, newQuesMap]
            })
            .then((resp) => {
                data.last_submission = resp[0]
                data.quesMap = resp[1]
                data.save()
            })
            .then(() => {
                res.send("Information updated successfully!")
            })
            .catch((err) => res.send(err))
        } else {
            res.send(res.send('No data found for this user'));
        }
    }) 
})


module.exports = router