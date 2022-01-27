import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CreateLink = () => {
  return <StyledLink to="about">Create post</StyledLink>;
};

const StyledLink = styled(Link)`
  background-color: #ffffff;
  border-radius: 0.2rem;
  color: #000000;
  padding: 0.5rem 2rem;
`;

export default CreateLink;
