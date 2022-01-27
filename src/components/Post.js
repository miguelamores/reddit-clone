import React, { useCallback } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

const Post = ({ children, expiryTimestamp, id, removePost }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => removePost(id),
  });

  const handleLike = useCallback(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds + 120);
    restart(time);
  }, [restart, seconds]);

  return (
    <Card id={id}>
      {minutes}:{seconds}
      {children}
      <Like onClick={handleLike}>Like</Like>
    </Card>
  );
};

const Card = styled.div`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Like = styled.button``;

export default Post;
