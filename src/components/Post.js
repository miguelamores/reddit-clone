import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

const Post = ({
  children,
  expiryTimestamp,
  id,
  removePost,
  title,
  description,
  image,
}) => {
  const [newExpiry, setNewExpiry] = useState(
    new Date(expiryTimestamp.getTime())
  );
  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => null, //removePost(id),
  });

  const handleLike = useCallback(() => {
    const time = new Date(newExpiry.getTime());
    time.setSeconds(time.getSeconds() + 30);
    setNewExpiry(time);
    restart(time);
  }, [newExpiry, restart]);

  return (
    <Card id={id}>
      <Header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M14.906 9.214a4.27 4.27 0 0 1-2.229 1.42 7.31 7.31 0 0 1-2.36.07 3.57 3.57 0 0 0-3.354 1.459 2.627 2.627 0 0 0-.495 1.441l-.018 1.009.94-.37a2.995 2.995 0 0 1 2.262.277c-.298.19-.583.411-.861.627a8.176 8.176 0 0 1-.93.66 1.2 1.2 0 0 1-.945.2l-.714-.2-.132.73a.987.987 0 0 1-.388.617 2.258 2.258 0 0 1-.656.247 3.075 3.075 0 0 0-1.453.727 2.622 2.622 0 0 1-.057-.935 3.06 3.06 0 0 1 .835-1.28l.722-.819-.744-.402a4.412 4.412 0 0 1-1.854-2.58 6.867 6.867 0 0 1 .29-4.115 7.31 7.31 0 0 1 6.89-4.852l.22.003a9.215 9.215 0 0 1 1.863.247A2.4 2.4 0 0 0 13.34 7.58c.058 0 .116-.002.176-.006a2.377 2.377 0 0 0 1.788-1.01l.152-.204a5.493 5.493 0 0 1 .12 1.024 2.872 2.872 0 0 1-.67 1.83Z"></path>
          <circle cx="10.753" cy="8.702" r="1.006"></circle>
          <path d="M13.516 7.573c-.06.005-.118.007-.176.007a2.398 2.398 0 0 1-1.603-4.185 9.215 9.215 0 0 0-1.864-.246 8.467 8.467 0 0 0-.22-.004 7.31 7.31 0 0 0-6.89 4.852 6.867 6.867 0 0 0-.289 4.116 4.412 4.412 0 0 0 1.855 2.579l.744.402-.722.82a3.06 3.06 0 0 0-.835 1.279 2.622 2.622 0 0 0 .057.936 3.075 3.075 0 0 1 1.453-.728 2.258 2.258 0 0 0 .656-.247.987.987 0 0 0 .388-.617l.132-.73.713.2a1.2 1.2 0 0 0 .946-.2 8.176 8.176 0 0 0 .93-.66c.278-.216.563-.436.861-.627a2.995 2.995 0 0 0-2.263-.276l-.939.37.018-1.01a2.627 2.627 0 0 1 .495-1.441 3.57 3.57 0 0 1 3.354-1.459 7.31 7.31 0 0 0 2.36-.07 4.27 4.27 0 0 0 2.229-1.42 2.872 2.872 0 0 0 .67-1.83 5.493 5.493 0 0 0-.12-1.024l-.152.204a2.377 2.377 0 0 1-1.788 1.01Z"></path>
          <path d="M18.753.342A1.155 1.155 0 0 0 17.31.127l-4.05 2.325a9.945 9.945 0 0 0-3.347-.653A8.594 8.594 0 0 0 1.5 7.523a8.261 8.261 0 0 0-.325 4.961A6.162 6.162 0 0 0 3 15.408a3.244 3.244 0 0 0-.825 1.637 3.638 3.638 0 0 0 .667 2.63.868.868 0 0 0 .696.355.835.835 0 0 0 .169-.017.92.92 0 0 0 .703-.681c.087-.35.338-.452.981-.631a3.073 3.073 0 0 0 1.116-.478 2.329 2.329 0 0 0 .692-.835 2.817 2.817 0 0 0 1.329-.408 9.23 9.23 0 0 0 1.09-.766 5.376 5.376 0 0 1 1.216-.794.86.86 0 0 0 .537-.626.936.936 0 0 0-.255-.848 4.32 4.32 0 0 0-2.93-1.165 2.262 2.262 0 0 1 1.99-.735 8.295 8.295 0 0 0 2.87-.114 5.646 5.646 0 0 0 2.907-1.866 4.21 4.21 0 0 0 .973-2.682 6.432 6.432 0 0 0-.192-1.484 3.042 3.042 0 0 0-.142-.41c-.055-.136-.127-.262-.193-.392l2.458-3.295a1.16 1.16 0 0 0-.104-1.461Zm-3.847 8.872a4.27 4.27 0 0 1-2.229 1.42 7.31 7.31 0 0 1-2.36.07 3.57 3.57 0 0 0-3.354 1.459 2.627 2.627 0 0 0-.495 1.441l-.018 1.009.94-.37a2.995 2.995 0 0 1 2.262.277c-.298.19-.583.411-.861.627a8.176 8.176 0 0 1-.93.66 1.2 1.2 0 0 1-.945.2l-.714-.2-.132.73a.987.987 0 0 1-.388.617 2.258 2.258 0 0 1-.656.247 3.075 3.075 0 0 0-1.453.727 2.622 2.622 0 0 1-.057-.935 3.06 3.06 0 0 1 .835-1.28l.722-.819-.744-.402a4.412 4.412 0 0 1-1.854-2.58 6.867 6.867 0 0 1 .29-4.115 7.31 7.31 0 0 1 6.89-4.852l.22.003a9.215 9.215 0 0 1 1.863.247A2.4 2.4 0 0 0 13.34 7.58c.058 0 .116-.002.176-.006a2.377 2.377 0 0 0 1.788-1.01l.152-.204a5.493 5.493 0 0 1 .12 1.024 2.872 2.872 0 0 1-.67 1.83Zm.665-5.264-.819 1.098-.544.728a1.054 1.054 0 1 1-1.405-1.505l.531-.305 1.344-.772 2.548-1.462Z"></path>
          <path d="m15.571 3.95-.819 1.098-.544.728a1.054 1.054 0 1 1-1.405-1.505l.531-.305 1.344-.772 2.548-1.462Z"></path>
        </svg>
        <User>Posted by u/Cosmacelf</User>
      </Header>
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Image src={image} alt="post" />
      </Body>
      <Footer>
        <Like onClick={handleLike}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 490.1 490.1"
          >
            <g>
              <path
                d="M201.9,21.018c-18.6,13.6-28,36.9-28,69v76.2H68.3c-37.6,0-68.3,30.6-68.3,68.3v2.1c0,0.6,0.1,1.3,0.2,1.9l28.1,176.5
		c5.2,42.4,34.8,66.8,81.1,66.8h209.2c37.6,0,68.3-30.6,68.3-68.3v-196.1c0-5.9,4.8-10.7,10.7-10.7h57.3c5.9,0,10.7,4.8,10.7,10.7
		v207.9c0,5.9-4.8,10.7-10.7,10.7h-33.1c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h33.1c19.4,0,35.2-15.8,35.2-35.2v-208
		c0-19.4-15.8-35.2-35.2-35.2h-57.3c-13.8,0-25.8,8-31.6,19.6c-0.8-0.5-1.7-0.8-2.7-1.1c-3.3-0.9-81.4-23.8-81.4-91.2v-85.6
		c0-5.4-3.5-10.1-8.6-11.7C271.7,11.718,231.3-0.582,201.9,21.018z M356.8,224.218c1.9,0.5,3.8,0.6,5.6,0.2v189.1
		c0,24.1-19.6,43.8-43.8,43.8h-66.4H109.4c-34,0-53.1-15.2-56.9-45.7l-28-176v-1.1c0-24.1,19.6-43.8,43.8-43.8h117.9
		c6.8,0,12.3-5.5,12.3-12.3v-88.4c0-23.9,6-40.4,17.9-49.2c12.9-9.6,30.7-8.7,41.1-7v75.6
		C257.5,195.418,352.7,223.118,356.8,224.218z"
              />
            </g>
          </svg>
        </Like>
        <Time>
          Remaining time {minutes}:{seconds} min
        </Time>
      </Footer>

      {children}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  background-color: #ffffff;
  color: #000000;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;

  & svg {
    height: 2.5rem;
    width: 2.5rem;

    & path:first-child {
      fill: #00ccc0;
    }
  }

  &:hover {
    border-color: #898989;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  min-height: 2rem;
`;

const User = styled.p`
  color: #787c7e;
  margin-left: 1rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  display: block;
  max-height: 40rem;
  object-fit: cover;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Like = styled.button`
  border: none;
  background: transparent;
  transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  & svg path:first-child {
    fill: #000000;
  }
`;

const Time = styled.span`
  font-size: 1.5rem;
`;

export default Post;
