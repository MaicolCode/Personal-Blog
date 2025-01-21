import { Router } from 'express'
import { generateToken } from '../libs/jwt.js'
import dotenv from 'dotenv'
dotenv.config()

const userAdmin = process.env.USER
const passwordAdmin = process.env.PASSWORD

const loginRouter = Router()

loginRouter.get('/', (req, res) => {
  res.render('login')
})

loginRouter.post('/', async (req, res) => {
  const { user, password } = req.body

  if (user === userAdmin && password === passwordAdmin) {
    const token = await generateToken({ user })

    res.cookie('token', token)
    return res.redirect('/')
  }

  res.redirect('/')
})

export default loginRouter
