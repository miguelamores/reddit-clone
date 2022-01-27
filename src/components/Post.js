import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

const Post = ({ children, expiryTimestamp, id, removePost }) => {
  const [newExpiry, setNewExpiry] = useState(
    new Date(expiryTimestamp.getTime())
  );
  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => removePost(id),
  });

  const handleLike = useCallback(() => {
    const time = new Date(newExpiry.getTime());
    time.setSeconds(time.getSeconds() + 30);
    setNewExpiry(time);
    restart(time);
  }, [newExpiry, restart]);

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
