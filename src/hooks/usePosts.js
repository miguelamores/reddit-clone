import { useEffect, useState, useCallback } from "react";

const REDDIT_POSTS = "redditPosts";

export const usePosts = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = useCallback(() => {
    const posts = localStorage.getItem(REDDIT_POSTS);
    if (!posts) return null;

    try {
      const parsedPosts = JSON.parse(posts);
      return parsedPosts;
    } catch (error) {
      return [];
    }
  }, []);

  const savePost = useCallback(
    (post) => {
      const posts = getPosts();
      if (posts) {
        posts.push(post);
        setPosts(posts);
        localStorage.setItem(REDDIT_POSTS, JSON.stringify(posts));
      } else {
        localStorage.setItem(REDDIT_POSTS, JSON.stringify([post]));
      }
    },
    [getPosts]
  );

  const removePost = (id) => {
    const posts = getPosts();
    const postsCopy = [...posts];
    const index = posts.findIndex((post) => post.id === id);
    if (index >= 0) {
      postsCopy.splice(index, 1);
      console.log(postsCopy);
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
