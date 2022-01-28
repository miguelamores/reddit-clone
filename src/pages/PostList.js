import React from "react";
import "../App.css";
import styled from "styled-components";
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
      <PostsWrapper>
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            expiryTimestamp={time}
            removePost={removePost}
            {...post}
          >
            {post.name}
          </Post>
        ))}
      </PostsWrapper>
    </>
  );
};

const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

export default PostList;
