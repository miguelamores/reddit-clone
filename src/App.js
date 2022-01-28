import * as React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dae0e6;
  height: 100%;
  min-height: 100vh;
  padding: 7rem 5rem;
  margin: 0 auto;
`;

export default App;
