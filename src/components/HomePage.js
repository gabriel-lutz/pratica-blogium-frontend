import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = axios.get("http://localhost:4000/posts")
    response.then(data=>{
      setPosts(data.data)
    })
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
