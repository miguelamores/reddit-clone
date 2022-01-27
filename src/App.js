import * as React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Container>
      <h1>Welcome to React Router!</h1>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="about" element={<CreatePost />} />
      </Routes>
      {/* </BrowserRouter> */}
    </Container>
  );
}

const Container = styled.div`
  background-color: #dae0e6;
  height: 100vh;
  padding: 3rem 5rem;
`;

export default App;
