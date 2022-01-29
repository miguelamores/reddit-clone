import React from "react";
import "../App.css";
import styled from "styled-components";
import Post from "../components/Post";
import CreateLink from "../components/CreateLink";
import { usePosts } from "../hooks/usePosts";

const PostList = () => {
  const { posts, removePost, updatePost } = usePosts();

  return (
    <>
      <CreateLink />
      <PostsWrapper>
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            expiryTimestamp={new Date(post?.time)}
            removePost={removePost}
            updatePost={updatePost}
            {...post}
          />
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
  max-width: 70rem;
  width: 100%;
`;

export default PostList;
