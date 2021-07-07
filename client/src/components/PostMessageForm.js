import styled from "styled-components";
import { useState } from "react";
import { newPost } from "../apis";
import e from "cors";

const Form = styled.form`
  display: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.varient};
  border-radius: 0 0 2rem 2rem;
  position: sticky;
`;
const RowForm = styled.div`
  height: auto;
  display: flex;
  flex: 1;
  padding: 0;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 15px;
  font-weight: bold;
  font-size: 1rem;
  outline: 0;
  color: ${(color) => color};
  border-radius: 0.5rem 0 0 0.5rem;
  border: 0;
  width: calc(100% - 30px);
  flex: 0.9;
`;
const Button = styled.button`
  text-transform: uppercase;
  background-color: #4da054;
  color: #fff;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 15px;
  font-size: 1rem;
  border: 0;
  flex: 0.1;
`;
const TextArea = styled.textarea`
  border-radius: 0.5rem;
  flex: 1;
  padding: 15px;
  font-family: fixedsys, monospace;
  font-size: 1rem;
  outline: 0;
  color: ${(color) => color};
  border: 0;
  width: calc(100% - 30px);
  flex: 0.9;
  resize: none;
`;

const PostMessageForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    if (message && title) {
      let data = { message, title };
      newPost(data);
      setMessage("");
      setTitle("");
    }
    return;
  };

  return (
    <Form varient={"#233438"} onSubmit={handleSumbit}>
      <RowForm>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title goes here!"
        />
        <Button>Post </Button>
      </RowForm>
      <TextArea
        onChange={(e) => setMessage(e.target.value)}
        rows="5"
        placeholder="Post message..."
        value={message}
      />
    </Form>
  );
};

export default PostMessageForm;
