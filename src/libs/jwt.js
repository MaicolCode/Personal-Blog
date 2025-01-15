import jwt from 'jsonwebtoken'

export const secret = '020603PCH'

export function generateToken(payload) {
  return new Promise((resolve, reject) =>
    jwt.sign(payload, secret, { expiresIn: '20m' }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  )
}
