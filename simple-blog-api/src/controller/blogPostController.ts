import { Request, Response } from "express";
import BlogPost from "../model/blogPost";
export class PostController {
  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const { sortBy, filterByCategory } = req.query as {
        sortBy?: string;
        filterByCategory?: string;
      };

      const query: any = {};
      if (filterByCategory) {
        query.category = filterByCategory;
      }
      const posts = await BlogPost.find(query);
      const allowedSortFields = ["createdAt", "title", "category"];
      const sortByField = allowedSortFields.includes(sortBy as string)
        ? (sortBy as string)
        : "createdAt";

      posts.sort((a: any, b: any) => {
        if (sortByField === "createdAt") {
          return a.createdAt.getTime() - b.createdAt.getTime();
        }
        return a[sortByField].localeCompare(b[sortByField]);
      });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ message: `Internal server error!` });
    }
  }
  public async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const post = await BlogPost.findById(req.params.id);
      if (!post) {
        res.status(404).json({ message: `Post not found` });
      } else {
        res.status(200).json(post);
      }
    } catch (err) {
      res.status(500).json({ message: `Internal server error!` });
    }
  }
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const { title, content, author, category } = req.body;
      const post = new BlogPost({ title, content, author, category });
      const createdPost = await post.save();
      res.status(201).json(createdPost);
    } catch (err) {
      res.status(500).json({ message: `Internal server error!` });
    }
  }
  public async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const { title, content, author, category } = req.body;
      const updatePost = await BlogPost.findByIdAndUpdate(
        req.params.id,
        { title, content, author, category },
        { new: true }
      );
      if (!updatePost) {
        res.status(404).json({ message: `No post found with this id` });
      } else {
        res.status(200).json(updatePost);
      }
    } catch (err) {
      res.status(500).json({ message: `Internal server error!` });
    }
  }
  public async deletePost(req: Request, res: Response): Promise<void> {
    try {
      const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        res.status(404).json({ message: `No post found with this id` });
      } else {
        res.status(200).json(deletedPost);
      }
    } catch (err) {
      res.status(500).json({ message: `Internal server error!` });
    }
  }
}
