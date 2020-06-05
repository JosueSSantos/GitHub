import React from "react";
import { Container, Content } from "../Card.styles";

export default function Card({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}