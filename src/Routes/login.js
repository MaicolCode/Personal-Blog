import { Router } from 'express'
import { generateToken } from '../libs/jwt.js'

const loginRouter = Router()

loginRouter.get('/', (req, res) => {
  res.render('login')
})

loginRouter.post('/', async (req, res) => {
  const { user, password } = req.body

  if (user === 'MaicolAdmin020603' && password === '020603PCH') {
    const token = await generateToken({ user })

    res.cookie('token', token)
    return res.redirect('/')
  }

  res.redirect('/')
})

export default loginRouter
