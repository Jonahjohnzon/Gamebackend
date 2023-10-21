const jwt = require("jsonwebtoken")
const verifyJwt = (req, res, next) =>{
    const token = req.headers["x-access-token"]

    if(!token)
    {
        res.json({auth:false, mgs: "no token"})
    }
    else{
        jwt.verify(token, process.env.JWT, (err, decoded) =>{
            if(err)
            {   console.log(err)
                res.json({auth:false, mgs:"not authenticated"})}
            else{
                req.userId = decoded.id
                next()
            }
        })
    }
}
module.exports = verifyJwt