const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    let Token = req.headers['token_key']
    jwt.verify(Token, 'mysecret321', (err, decode)=> {
        if(err){
            res.status(501).json({status: "Invalid Token", data: err})
        }else{
            next()
        }
    })
}