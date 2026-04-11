import React from "react";

function PostDisplay({ data, handleDelete }) {
  return (
  <div data-testid="posts-container" className="flex wrap gap-10">
    {data.map((blog) => (
      <div className="post-box" key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <button onClick={() => { handleDelete(blog?.id) }}>Delete</button>
      </div>
    ))}
  </div>
);
  
}

export default PostDisplay;
