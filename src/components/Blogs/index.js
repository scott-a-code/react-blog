import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({title, blogs}) => {
    return (
        <div className="blogs">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.snippet}</p>
                    </Link>

                </div>
            ))}
            
        </div>
    );
}
export default Blogs;