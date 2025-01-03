import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Spinner from "./Spinner"; // Make sure to import the Spinner component if it's not already imported.

const Blog = () => {
    const { posts, loading } = useContext(AppContext);
    
    return (
        <div>
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) :
                    (
                        posts.map((post) => (
                            <div key={post.id}>
                                <p>{post.title}</p>
                                <p>
                                    By <span>{post.author}</span> on <span>{post.category}</span>
                                </p>
                                <p>Posted on {post.date}</p>
                                <p>{post.content}</p>
                                <div>
                                    {post.tags.map((tag, index) => (
                                        <span key={index}>{`#${tag}`}</span>
                                    ))}
                                </div>
                            </div>
                        ))
                    )
                )
            }
        </div>
    );
};

export default Blog;
