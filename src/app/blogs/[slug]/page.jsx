import React from 'react';

const page = ({params}) => {
    console.log(params.slug);
    const {title,description} = blogs.find((blog)=>blog.slug ===params.slug )
    return (
        <div className='h-screen'>
            <h5>{title}</h5>
            <h5>{description}</h5>
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

export default page;