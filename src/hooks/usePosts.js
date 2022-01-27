import { useEffect, useState, useCallback } from "react";

const REDDIT_POSTS = "redditPosts";

export const usePosts = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = useCallback(() => {
    const savedPosts = localStorage.getItem(REDDIT_POSTS);
    if (!savedPosts) return null;

    try {
      const parsedPosts = JSON.parse(savedPosts);
      return parsedPosts;
    } catch (error) {
      return [];
    }
  }, []);

  const savePost = useCallback(
    (post) => {
      const postList = getPosts();
      if (postList) {
        postList.push(post);
        setPosts(postList);
        localStorage.setItem(REDDIT_POSTS, JSON.stringify(postList));
      } else {
        localStorage.setItem(REDDIT_POSTS, JSON.stringify([post]));
      }
    },
    [getPosts]
  );

  const removePost = (id) => {
    const postList = getPosts();
    const postsCopy = [...postList];
    const index = postsCopy.findIndex((post) => post.id === id);
    if (index >= 0) {
      postsCopy.splice(index, 1);
      setPosts(postsCopy);
      localStorage.setItem(REDDIT_POSTS, JSON.stringify(postsCopy));
    }
  };

  useEffect(() => {
    const posts = getPosts();
    setPosts(posts);
  }, [getPosts, setPosts]);

  return { posts, savePost, removePost };
};
