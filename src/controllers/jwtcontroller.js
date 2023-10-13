const jwt = require('jsonwebtoken')
exports.createToken = (req, res) => {

    let payload = {
        exp: Math.floor(Date.now()/1000)+(10),
        date: {Name: "Mobinul Islam Mahi", address: "Coxsbazar"}
    }
    let token = jwt.sign(payload, 'mysecret321')
    res.send(token)
}

exports.DecodeToken = (req, res)=> {
    let Token = req.headers['token_key']
    jwt.verify(Token, 'mysecret321', function(err, decode){
        if (err){
            res.status(501).json({status: "Invalid Token", data: err})
        }else{
            res.status(200).json({status:"success", data: decode})
        }
    })
}

