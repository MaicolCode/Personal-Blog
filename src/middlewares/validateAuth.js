import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.JWT_SECRET

export const validateAuth = (req, res, next) => {
  const cookies = req.cookies

  const { token } = cookies

  if (!token) {
    res.redirect('/')
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token not valid' })
    req.user = decoded.user
    next()
  })
}
