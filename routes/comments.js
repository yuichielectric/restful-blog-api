const store = require('../data/store')

module.exports = {
  getComments (req, res) {
    res.status(200).send(store.posts[req.params.postId].comments)
  },
  addComment (req, res) {
    let post = store.posts[req.params.postId]
    let id = post.comments.length
    post.comments.push(req.body)
    res.status(201).send({id: id})
  },
  updateComment (req, res) {
    console.log(req.body)
    console.log(req.params.commentId)
    let post = store.posts[req.params.postId]
    post.comments[req.params.commentId] = req.body
    res.status(200).send(post)
  },
  removeComment (req, res) {
    let post = store.posts[req.params.postId]
    post.comments.splice(req.params.commentId, 1)
    res.sendStatus(204)
  }
}
