import React from 'react';
import { Blogs, useFetch } from '../../components'

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="mainDiv">
            { error && <div>{error}</div>}
            { isPending && <h1>Loading...</h1>}
            { blogs && <Blogs blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home;