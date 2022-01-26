import React from "react";
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
  console.log(seconds);

  return (
    <Card id={id} onClick={() => removePost(id)}>
      {children}
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

export default Post;
