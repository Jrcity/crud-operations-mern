import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchById, updatePost } from "../apis";
import { Button, Form, Input, RowForm, TextArea } from "./PostMessageForm";

const UpdateForm = () => {
  const [post, setPost] = useState({ title: "", message: "" });
  let history = useHistory();
  useEffect(() => {
    let id = history.location.state;
    fetchById(id).then((res) => {
      if (res === undefined) {
        return history.goBack();
      }
      return setPost(res.data);
    });
  }, [history]);
  function handleUpdate(e) {
    e.preventDefault();
    if (post.message || post.title) {
      // console.log(post);
      updatePost(history.location.state, post);
      setTimeout(() => {
        history.push("/");
      }, 100);
    }
  }
  return (
    <Form onSubmit={handleUpdate} varient={"#233438"}>
      <RowForm>
        <Input
          value={post.title}
          onChange={(e) => setPost({ title: e.target.value })}
        />
        <Button background={"#2491b3"}>Update</Button>
      </RowForm>
      <TextArea
        height={"50vh"}
        value={post.message}
        onChange={(e) => setPost({ message: e.target.value })}
        row={5}
      />
    </Form>
  );
};

export default UpdateForm;
