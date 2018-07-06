const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

let app = express()
app.use(logger('common'))
app.use(bodyParser.json())

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId/', routes.posts.updatePost)
app.delete('/posts/:postId/', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId/', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId/', routes.comments.removeComment)

app.listen(3000)
