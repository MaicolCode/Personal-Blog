import { Router } from 'express'
import { readFileSync } from 'fs'
import { get } from 'http'
import { resolve } from 'path'

const indexRouter = Router()

const getPosts = () => {
  return JSON.parse(readFileSync(resolve('./src/utils/posts.json')))
}

function getRecentPosts(posts, days) {
  const now = new Date()
  const limitDate = new Date()
  limitDate.setDate(now.getDate() - days)

  return posts.filter((post) => {
    const postDate = new Date(post.date)
    return postDate >= limitDate && postDate <= now
  })
}

indexRouter.get('/', (req, res) => {
  const posts = getPosts()

  const recentPosts = getRecentPosts(posts, 2)
  const orderedPosts = posts.sort((a, b) => b.id - a.id)

  res.render('index', {
    posts: orderedPosts,
    recentPosts: recentPosts.sort((a, b) => b.id - a.id),
    isAdmin: false
  })
})

indexRouter.get('/post/:id', (req, res) => {
  const posts = getPosts()

  const { id } = req.params
  const post = posts.find((post) => post.id == id)

  if (!post) return res.status(404).render('404')
  res.render('viewPost', {
    post,
    posts: posts.filter((p) => p.id != id),
    isAdmin: false
  })
})

export default indexRouter
