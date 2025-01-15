import { Router } from 'express'

const logoutRouter = Router()

logoutRouter.get('/', (req, res) => {
  res.clearCookie('token')
  res.redirect('/')
})

export default logoutRouter
