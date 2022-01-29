import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const INITIAL_FORM = {
  title: "",
  description: "",
  image: "",
};

const CreatePost = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const { posts, savePost } = usePosts();
  let navigate = useNavigate();

  console.log(posts);

  const handleText = (e) => {
    const { name, value } = e.target;
    const copyForm = { ...form };
    copyForm[name] = value;
    setForm(copyForm);
  };

  const handleImage = (el) => {
    const file = el.target.files[0];
    const reader = new FileReader();
    const newForm = { ...form };
    reader.onloadend = function () {
      newForm.image = reader.result;
      setForm(newForm);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form?.title) return;

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    const newForm = { ...form };
    newForm.id = crypto.randomUUID();
    newForm.time = time;
    savePost(newForm);
    setForm(INITIAL_FORM);
    navigate("/");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Create a new post</Title>
      <FormTitle
        placeholder="Title"
        name="title"
        value={form?.title}
        onChange={handleText}
      />
      <Description
        placeholder="Description..."
        as="textarea"
        name="description"
        value={form?.description}
        onChange={handleText}
      />
      <Image type="file" accept="image/*" onChange={handleImage} />
      <SaveBtn disabled={!form?.title} type="submit">
        Save
      </SaveBtn>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ffffff;
  padding: 2rem;
  max-width: 70rem;
  width: 100%;

  @media only screen and (max-width: 43.75em) {
    height: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: 800;

  @media only screen and (max-width: 43.75em) {
    font-size: 4rem;
  }
`;

const FormTitle = styled.input`
  background-color: #f6f7f8;
  border: 1px solid #edeff1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: border-box;
  height: 3.8rem;
  padding: 01.6rem;
  outline: none;

  @media only screen and (max-width: 43.75em) {
    font-size: 2rem;
    height: 5rem;
  }

  &:hover,
  &:focus {
    background-color: #ffffff;
    border: 1px solid #0079d3;
  }
`;

const Description = styled(FormTitle)`
  height: 10rem;

  @media only screen and (max-width: 43.75em) {
    height: 15rem;
  }
`;

const Image = styled.input``;

const SaveBtn = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #0079d3;
  color: #ffffff;
  padding: 1rem;

  @media only screen and (max-width: 43.75em) {
    font-size: 2rem;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #edeff1;
  }
`;

export default CreatePost;
