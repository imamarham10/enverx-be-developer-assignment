import express from "express";
import bodyParser from "body-parser";
import BlogPost from './model/blogPost';
// import { BlogPostController } from './controllers/blogPostController';


const app = express();
const port = 3000;

app.use(bodyParser.json());

// const blogPostController = new BlogPostController();

// // API Endpoints
// app.get('/api/posts', blogPostController.getAllPosts);
// app.post('/api/posts', blogPostController.createPost);
// app.get('/api/posts/:id', blogPostController.getPostById);
// app.put('/api/posts/:id', blogPostController.updatePost);
// app.delete('/api/posts/:id', blogPostController.deletePost);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
