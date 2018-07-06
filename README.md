RESTful Blog API server
=====

This is my solution for the 2nd assignment at edX Introduction to Node.js course.

https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2018/course/

This server handles CRUD operations for blog posts and comments.

```
$ npm start
```

### 1. Why did I design this project the way I did?

I implemented the blog storage as one module. This enables me to fetch data from both routes/posts.js and routes/comments.js. 

### 2. How did I test?

I tested all possible operations with curl.

### 3. Known issues

 * I thinks it is odd that store.js is located at routes directory...
 * There are no validation logic.
