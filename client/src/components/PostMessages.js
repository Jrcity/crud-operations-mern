import { useEffect, useState } from "react";
import styled from "styled-components";

import PostMessageCard from "./PostMessageCard";

const NoPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 50vh;
`;
const AllPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 15px 10px;
`;

const PostMessages = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts([
      {
        message: "This is a message",
        title: "my title",
      },
      {
        message: "This is a message",
        title: "my title",
      },
      {
        message: "This is a message",
        title: "my title",
      },
      {
        message: "This is a message",
        title: "my title",
      },
      {
        message: "This is a message",
        title: "my title",
      },
      {
        message: "This is a message",
        title: "my title",
      },
    ]);

    //clear effect
    return () => {};
  }, [posts]);

  return posts ? (
    <AllPosts>
      {posts.map(({ message, title }, id) => (
        <PostMessageCard key={id} message={message} title={title} />
      ))}
    </AllPosts>
  ) : (
    <NoPost>There are no post messages yet.</NoPost>
  );
};

export default PostMessages;
