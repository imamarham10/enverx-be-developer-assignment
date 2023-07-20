# Simple Blog API

This is a simple RESTful API for a blog application built with Node.js and Express.js. The API allows you to perform CRUD (Create, Read, Update, Delete) operations for blog posts. Blog posts are stored in a MongoDB database, and the API includes validation for data integrity. Error handling is implemented, and appropriate HTTP status codes are returned.

## Prerequisites

Node.js (v14 or higher), 
npm (Node Package Manager), 
MongoDB

## Getting Started
1. Clone the repository to your local machine
2. Install the dependencies using npm:
```bash
npm install
```


### Running the API

```bash
npm start
```
The API will run on http://localhost:3000 by default. If the server starts successfully, you should see a message indicating that the server is running.

## API Endpoints
The following endpoints are available in the API:

1. GET /posts: Get all blog posts. You can use query parameters for sorting and filtering the posts.

* Query Parameters:
 * sortBy: Optional. Sort the posts by 'createdAt', 'title', or 'category'.  
 * filterByCategory: Optional. Filter posts by category.
* Example: GET http://localhost:3000/api/posts?sortBy=title&filterByCategory=cars

2. POST /posts: Create a new blog post.
* Request Body:
```json
{
  "title": "Your Post Title",
  "content": "Your post content goes here",
  "author": "Your Name",
  "category": "Technology"
}
```
3. PUT /posts/:id Update an existing blog post by ID.
* Request Body: Same as the Post endpoint.

4. DELETE /posts/:id Delete a blog post by ID.

5. GETBYID /posts/:id Get a blog post by ID.
