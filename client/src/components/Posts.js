/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchAll } from "../apis";
import PostCard from "./PostCard";
import PostMessageForm from "./PostMessageForm";

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  padding: 20px;
  transition: all linear 1200ms ease-out;
  @media screen and (max-width: 760px) {
    && {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 761px) and (max-width: 1060px) {
    && {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const NoPost = styled.h1`
  text-align: center;
  margin-top: 30vh;
`;

const Posts = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetchAll().then((posts) => setPost(posts));
  }, []);

  return posts.length ? (
    <>
      <PostMessageForm />
      <PostContainer>
        {posts.map((post) => (
          <PostCard
            Body={post.message}
            Heading={post.title}
            key={post._id}
            id={post._id}
          />
        ))}
      </PostContainer>
    </>
  ) : (
    <NoPost>Empty Records!</NoPost>
  );
};

export default Posts;
