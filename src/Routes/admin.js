import { Router } from 'express'
import { readFileSync, write, writeFileSync } from 'fs'
import { resolve } from 'path'

const adminRouter = Router()

const getPosts = () => {
  return JSON.parse(readFileSync(resolve('./src/utils/posts.json')))
}

adminRouter.get('/', (req, res) => {
  const posts = getPosts()
  res.render('admin/index', { posts })
})

adminRouter.get('/post/new', (req, res) => {
  res.render('admin/actions/new')
})

adminRouter.post('/post/new', (req, res) => {
  const { title, content, date } = req.body
  const posts = getPosts()

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    date
  }

  const postsFiltered = posts

  postsFiltered.push(newPost)

  writeFileSync(
    resolve('./src/utils/posts.json'),
    JSON.stringify(postsFiltered.sort((a, b) => a.id - b.id))
  )

  res.redirect('/admin')
})

adminRouter.get('/post/:id', (req, res) => {
  const { id } = req.params
  const posts = getPosts()
  const post = posts.find((post) => post.id == id)
  console.log(post)
  res.render('admin/actions/edit', { post })
})

adminRouter.post('/post/edit/:id', (req, res) => {
  const { id } = req.params
  const { title, content, date } = req.body
  const posts = getPosts()
  const post = posts.find((post) => post.id == id)

  const updatedPost = {
    ...post,
    title,
    content,
    date
  }

  const postsFiltered = posts.filter((post) => post.id != id)

  postsFiltered.push(updatedPost)

  writeFileSync(
    resolve('./src/utils/posts.json'),
    JSON.stringify(postsFiltered.sort((a, b) => a.id - b.id))
  )

  res.redirect('/admin')
})

adminRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  const posts = getPosts()
  const postsFiltered = posts.filter((post) => post.id != id)
  writeFileSync(
    resolve('./src/utils/posts.json'),
    JSON.stringify(postsFiltered)
  )
})

export default adminRouter
