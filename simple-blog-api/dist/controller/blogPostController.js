"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const blogPost_1 = __importDefault(require("../model/blogPost"));
class PostController {
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield blogPost_1.default.find();
                res.status(200).json(posts);
            }
            catch (err) {
                res.status(500).json({ message: `Internal server error!` });
            }
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield blogPost_1.default.findById(req.params.id);
                if (!post) {
                    res.status(404).json({ message: `Post not found` });
                }
                else {
                    res.status(200).json(post);
                }
            }
            catch (err) {
                res.status(500).json({ message: `Internal server error!` });
            }
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, content, author } = req.body;
                const post = new blogPost_1.default({ title, content, author });
                const createdPost = yield post.save();
                res.status(201).json(createdPost);
            }
            catch (err) {
                res.status(500).json({ message: `Internal server error!` });
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, content, author } = req.body;
                const updatePost = yield blogPost_1.default.findByIdAndUpdate(req.params.id, { title, content, author }, { new: true });
                if (!updatePost) {
                    res.status(404).json({ message: `No post found with this id` });
                }
                else {
                    res.status(200).json(updatePost);
                }
            }
            catch (err) {
                res.status(500).json({ message: `Internal server error!` });
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedPost = yield blogPost_1.default.findByIdAndDelete(req.params.id);
                if (!deletedPost) {
                    res.status(404).json({ message: `No post found with this id` });
                }
                else {
                    res.status(200).json(deletedPost);
                }
            }
            catch (err) {
                res.status(500).json({ message: `Internal server error!` });
            }
        });
    }
}
exports.PostController = PostController;
