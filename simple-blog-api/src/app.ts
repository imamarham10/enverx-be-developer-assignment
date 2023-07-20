import express from "express";
import bodyParser from "body-parser";
import { PostController } from './controller/blogPostController';


const app = express();
const port = 3000;

app.use(bodyParser.json());

const blogPostController = new PostController();

// API Endpoints
app.get('/posts', blogPostController.getAllPosts);
app.post('/posts', blogPostController.createPost);
app.get('/posts/:id', blogPostController.getPostById);
app.put('/posts/:id', blogPostController.updatePost);
app.delete('/posts/:id', blogPostController.deletePost);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
