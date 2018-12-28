// Dependencies.
import express from 'express';

const router = express.Router();

// Mock data, this should come from database.
const posts = [
  {
    id: 1,
    title: 'My blog post 1',
    content: '<p>Content</p>',
    author: 'Carlos Santana'
  },
  {
    id: 2,
    title: 'My blog post 2',
    content: '<p>Content</p>',
    author: 'Karolina Rojas'
  },
  {
    id: 3,
    title: 'My blog post 3',
    content: '<p>Content</p>',
    author: 'Cristina Rojas'
  }
];

// The client send request 'get' to optain data from the server.
router.get('/', (req, res, next) => {
  res.send(`
    <p>Summary of Endpoints:</p>
    <ul>
      <li>/api/posts</li>
      <li>/api/post/:id</li>
    </ul>
  `);
});

// The client request 'get' all the post
router.get('/posts', (req, res, next) => {
  res.json({ // we return response with the data.
    response: posts
  });
});

// The client request 'get' a specific post by id.
router.get('/post/:id', (req, res, next) => {
  const { params: { id } } = req; // we are obtaining the params from the req.

  // we can develop operations like js server side.
  // find() method returns the value of the first element
  // in an array that pass a test (provided as a function).
  const singlePost = posts.find(post => post.id === Number(id));

  // if not found then send a error message
  if (!singlePost) {
    res.send({
      error: true,
      message: 'Post not found'
    });
  }

  // If the post is found then send the post all the object position.
  res.json({
    response: [singlePost]
  });
});


export default router;
