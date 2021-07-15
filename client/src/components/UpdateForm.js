import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchById, updatePost } from "../apis";
import { Button, Form, Input, RowForm, TextArea } from "./PostMessageForm";

const UpdateForm = () => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  let history = useHistory();
  useEffect(() => {
    let id = history.location.state;
    fetchById(id).then((res) => {
      if (res === undefined) {
        return history.goBack();
      }
      setMessage(res.data.Message);
      setTitle(res.data.title);
    });
  }, [history]);
  function handleUpdate(e) {
    e.preventDefault();
    if (message || title) {
      let post = { message, title };
      updatePost(history.location.state, post);
      setMessage("");
      setTitle("");
      setTimeout(() => history.push("/"), 100);
    } else return;
  }
  return (
    <Form onSubmit={handleUpdate} varient={"#233438"}>
      <RowForm>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button background={"#2491b3"}>Update</Button>
      </RowForm>
      <TextArea
        height={"50vh"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        row={5}
      />
    </Form>
  );
};

export default UpdateForm;
