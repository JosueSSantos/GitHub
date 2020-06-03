import React from "react";
import { Container, Title, Content } from "../Card.styles";

export default function Card({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}