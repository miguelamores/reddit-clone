import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";
import "../App.css";
import Post from "../components/Post";
import CreateLink from "../components/CreateLink";
import { usePosts } from "../hooks/usePosts";

const PostList = ({ expiryTimestamp }) => {
  // const [posts, setPosts] = useState([
  //   { id: 1, name: "Post 11" },
  //   { id: 2, name: "Post 2" },
  // ]);
  const { posts, savePost, removePost } = usePosts();

  // const removePost = (id) => {
  //   const postsCopy = [...posts];
  //   const index = posts.findIndex((post) => post.id === id);
  //   if (index >= 0) {
  //     postsCopy.splice(index, 1);
  //     console.log(postsCopy);
  //     setPosts(postsCopy);
  //   }
  // };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <>
      <CreateLink />
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          expiryTimestamp={time}
          removePost={removePost}
        >
          {post.name}
        </Post>
      ))}
    </>
  );
};

export default PostList;
