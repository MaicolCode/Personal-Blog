import { Router } from 'express'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const indexRouter = Router()

const posts = JSON.parse(readFileSync(resolve('./src/utils/posts.json')))

indexRouter.get('/', (req, res) => {
  const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0, 2)

  res.render('index', { posts, recentPosts })
})

indexRouter.get('/post/:id', (req, res) => {
  const { id } = req.params
  const post = posts.find((post) => post.id == id)
  res.render('viewPost', { post, posts: posts.filter((p) => p.id != id) })
})

export default indexRouter
