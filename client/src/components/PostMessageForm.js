import styled from "styled-components";

const Form = styled.form`
  display: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.varient};
  border-radius: 0 0 2rem 2rem;
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
const TextArea = styled(Input)`
  border-radius: 0.5rem;
  flex: 1;
`;

const PostMessageForm = () => {
  return (
    <Form method="POST" varient={"#233438"}>
      <RowForm>
        <Input placeholder="Title goes here!" />
        <Button>Post </Button>
      </RowForm>
      <TextArea row="5" placeholder="Post message..." />
    </Form>
  );
};

export default PostMessageForm;
