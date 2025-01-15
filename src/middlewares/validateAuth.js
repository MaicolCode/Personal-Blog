import jwt from 'jsonwebtoken'
import { secret } from '../libs/jwt.js'

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
