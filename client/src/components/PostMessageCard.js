import React from "react";
import styled from "styled-components";

const MessageCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bg};
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 10px;

  h1 {
    width: calc(100% - 20px);
    padding: 10px;
    background: #ccc;
    text-transform: uppercase;
  }
  p {
    padding: 10px;
    width: 100%;
    line-height: 1.7;
  }
`;

const PostMessageCard = ({ message, title }) => {
  return (
    <MessageCard>
      <h1>{title}</h1>
      <p>{message}</p>
    </MessageCard>
  );
};

export default PostMessageCard;
