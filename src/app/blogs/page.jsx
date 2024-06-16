import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className='p-24'>
        {
            blogs.map((blog)=>(
<div key={blog.slug} className='border-2 p-12'>
    <h3>{blog.title}</h3>
    <h3>{blog.description}</h3>
    <button className='bg-red-400 p-3'><Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
</div>
            ))
        }
        </div>
    );
};
const blogs = [
    {
      "slug": "optimizing-react-performance",
      "title": "Optimizing React Performance: Tips and Tricks",
      "description": "Discover various techniques and best practices for improving the performance of your React applications. Learn about memoization, lazy loading, and more."
    },
    {
      "slug": "introduction-to-nextjs",
      "title": "Introduction to Next.js: The React Framework",
      "description": "Get started with Next.js, the popular React framework for building server-rendered applications. This guide covers the basics, including setup, routing, and deployment."
    },
    {
      "slug": "building-restful-apis-with-nodejs",
      "title": "Building RESTful APIs with Node.js",
      "description": "Learn how to build robust and scalable RESTful APIs using Node.js and Express. This tutorial covers everything from setting up the server to creating endpoints and handling requests."
    },
    {
      "slug": "mastering-javascript-promises",
      "title": "Mastering JavaScript Promises",
      "description": "Understand how to effectively use JavaScript promises to handle asynchronous operations. This article covers promise chaining, error handling, and advanced techniques."
    },
    {
      "slug": "css-grid-vs-flexbox",
      "title": "CSS Grid vs. Flexbox: When to Use Which",
      "description": "Explore the differences between CSS Grid and Flexbox, two powerful layout systems in CSS, and learn when to use each for optimal layout design."
    }
  ]
  
export default BlogsPage;