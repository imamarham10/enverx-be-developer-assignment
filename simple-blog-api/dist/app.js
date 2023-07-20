"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import { BlogPostController } from './controllers/blogPostController';
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
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
