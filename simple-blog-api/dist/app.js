"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const blogPostController_1 = require("./controller/blogPostController");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
const blogPostController = new blogPostController_1.PostController();
// API Endpoints
app.get('/posts', blogPostController.getAllPosts);
app.post('/posts', blogPostController.createPost);
app.get('/posts/:id', blogPostController.getPostById);
app.put('/posts/:id', blogPostController.updatePost);
app.delete('/posts/:id', blogPostController.deletePost);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
