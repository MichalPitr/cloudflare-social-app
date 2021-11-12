import './App.css';
import Form from './Form'
import { useEffect, useState } from 'react';

const apiURL = "https://myapp.michal-pitr.workers.dev/posts";

function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(apiURL);
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div id="container">
      <h1 id="title">Cloudflare Social App</h1>
      <Form />
      {posts.map((post) => (
        <div class="post-body">
            <span class="post-user">@{post.username}: </span>
            <span class="post-title"><b>{post.title}</b></span> <br></br>
            <span class="post-content">{post.content}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
