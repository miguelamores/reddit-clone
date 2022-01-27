import React, { useState } from "react";
import styled from "styled-components";

const INITIAL_FORM = {
  title: "",
  description: "",
  image: "",
};

const CreatePost = () => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleText = (e) => {
    const { name, value } = e.target;
    const copyForm = { ...form };
    copyForm[name] = value;
    setForm(copyForm);
  };

  const handleImage = (el) => {
    console.log(el.target);
    const file = el.target.files[0];
    const reader = new FileReader();
    const newForm = { ...form };
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      newForm.image = reader.result;
      setForm(newForm);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (!form?.title && !form?.image) return;

    const newForm = { ...form };
    newForm.id = crypto.randomUUID();
    localStorage.setItem("redditPosts", JSON.stringify(newForm));
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Title
        placeholder="Title"
        name="title"
        value={form?.title}
        onChange={handleText}
      />
      <Description
        name="description"
        value={form?.description}
        onChange={handleText}
      />
      <Image type="file" accept="image/*" onChange={handleImage} />
      <SaveBtn type="submit">Save</SaveBtn>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ffffff;
  padding: 2rem;
`;

const Title = styled.input``;

const Description = styled.textarea``;

const Image = styled.input``;

const SaveBtn = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #0079d3;
  color: #ffffff;
  padding: 1rem;
`;

export default CreatePost;
