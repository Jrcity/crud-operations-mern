import { Card } from "@material-ui/core";
import styled from "styled-components";

const MCard = styled(Card)`
  position: relative;
  top: 150px;
  width: 50vw;
  height: fit-content;
  margin: auto;
  padding: 20px;
  overflow-y: scroll;
`;

const ModalCard = ({ children }) => {
  return <MCard>{children}</MCard>;
};

export default ModalCard;
