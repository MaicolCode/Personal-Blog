import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.JWT_SECRET

export function generateToken(payload) {
  return new Promise((resolve, reject) =>
    jwt.sign(payload, secret, { expiresIn: '20m' }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  )
}
