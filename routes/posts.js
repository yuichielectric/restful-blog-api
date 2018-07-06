const store = require('../data/store')

module.exports = {
  getPosts (req, res) {
    res.status(200).send(store.posts)
  },
  addPost (req, res) {
    let id = store.posts.length
    let post = req.body
    post.comments = []
    store.posts.push(post)
    res.status(201).send({id: id})
  },
  updatePost (req, res) {
    let post = store.posts[req.params.postId]
    let comments = post.comments
    let newPost = req.body
    newPost.comments = comments
    store.posts[req.params.postId] = newPost
    res.status(200).send(newPost)
  },
  removePost (req, res) {
    store.posts.splice(req.params.postId, 1)
    res.sendStatus(204)
  }
}
