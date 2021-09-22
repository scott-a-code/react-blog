import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = {title, author, body};
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new blog added')
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h1>Write a new blog below:</h1>
            <form onSubmit={handleSubmit}> 
                <label>Blog Title</label>
                <input type='text' placeholder="Enter Title" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Author</label>
                <input type='text' placeholder="Enter your name" required value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <label>Blog body</label>
                <textarea type='text' placeholder="Enter body" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create;