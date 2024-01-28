import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    const accessToken = bearerHeader.substr(7)
    if(typeof bearerHeader !== 'undefined') {
        jwt.verify(accessToken, process.env.PRIVATE_KEY, (err, data) => {
            if(!err) {
                next()
            } else {
                res.sendStatus(403)
            }
        })
    } else {
        res.sendStatus(401)
    }
}

export default verifyToken