import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";
import "./App.css";
import Post from "./components/Post";

const App = ({ expiryTimestamp }) => {
  const [posts, setPosts] = useState([
    { id: 1, name: "Post 11" },
    { id: 2, name: "Post 22" },
  ]);

  const removePost = (id) => {
    const postsCopy = [...posts];
    const index = posts.findIndex((post) => post.id === id);
    if (index >= 0) {
      postsCopy.splice(index, 1);
      console.log(postsCopy);
      setPosts(postsCopy);
    }
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <div className="App">
      <header className="App-header">
        {posts.map((post) => (
          <Post id={post.id} expiryTimestamp={time} removePost={removePost}>
            {post.name}
          </Post>
        ))}
      </header>
    </div>
  );
};

export default App;
