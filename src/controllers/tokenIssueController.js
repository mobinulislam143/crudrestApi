let jwt = require('jsonwebtoken')

exports.TokenIssue = (req, res) => {
    let payload = {
        exp: Math.floor(Date.now()/1000)+(60*60),
        date: {Name: "Mobinul Islam Mahi", address: "Coxsbazar"}
    }
    let token = jwt.sign(payload, 'mysecret321')
    res.send(token)
}