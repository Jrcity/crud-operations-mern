import { useState } from "react";
import { useHistory } from "react-router";
import {
  Modal,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ModalCard from "./ModalCard";
import { deletePost } from "../apis";

const CardHeading = styled.h2`
  background: ${(props) => props.cardBg};
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
`;
const Content = styled(CardContent)`
  height: ${(props) => props.height};
  font-size: 1.2rem;
  word-spacing: 3px;
  line-height: 1.7;
  letter-spacing: 1.3px;
`;

const PostCard = ({ Body, Heading, id }) => {
  const [open, setOpen] = useState(false);
  let history = useHistory();
  function handleOpenModal() {
    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function removePost(id) {
    deletePost(id);
    document.location.reload();
  }
  function handleUpdate(id) {
    return (history.location.state = id);
  }

  return (
    <div>
      <Card onClick={handleOpenModal} variant={"outlined"}>
        <CardActionArea>
          <CardHeading>{Heading}</CardHeading>
          <Content height="30vh">
            {Body
              ? Body.split(" ").splice(0, 17).join(" ").concat(" ...Read more!")
              : ""}
          </Content>
        </CardActionArea>
      </Card>
      <Modal
        style={{ overflowY: "auto" }}
        open={open}
        onClose={handleCloseModal}
      >
        <ModalCard>
          <CardHeading>{Heading}</CardHeading>
          <Content>{Body}</Content>
          <CardActions>
            <Button onClick={() => handleUpdate(id)}>
              <Link style={{ textDecoration: "none" }} to="/update">
                Edit
              </Link>
            </Button>
            <Button style={{ color: "red" }} onClick={() => removePost(id)}>
              Delete
            </Button>
          </CardActions>
        </ModalCard>
      </Modal>
    </div>
  );
};

export default PostCard;
