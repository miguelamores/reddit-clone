import React from "react";
import "../App.css";
import Post from "../components/Post";
import CreateLink from "../components/CreateLink";
import { usePosts } from "../hooks/usePosts";

const PostList = () => {
  const { posts, savePost, removePost } = usePosts();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

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
