// const express = require('express');
// const apiRouter = express.Router();

// const usersRouter = require('./users');
// apiRouter.use('/users', usersRouter);

// const postsRouter = require('./posts');
// apiRouter.use('/posts', postsRouter);

// // const tagsRouter = require('./tags');
// // apiRouter.use('/tags', tagsRouter);

// module.exports = apiRouter;

const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./users');
const postsRouter = require('./posts')
const tagsRouter = require('./tags')

apiRouter.use('/users', usersRouter);
apiRouter.use('/posts', postsRouter);
apiRouter.use('/tags', tagsRouter)

module.exports = apiRouter;