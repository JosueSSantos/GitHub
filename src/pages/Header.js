import React from 'react';
import { Div, Img, Input, Button, Notificacao, Container } from "../styles/Header.styled";
import git from "./../assets/github2.png";
import perfil from "./../assets/notifica.png";

export default function Header() {
  return (
    <header >
      <Div>
        <Img />
        <Input placeholder="Seach or Jump to..." />
        <Button>Pull Request</Button>
        <Button>Issues</Button>
        <Button>Marketplace</Button>
        <Button>Explore</Button>
        <Notificacao />
        <Container>
          <Img src={perfil} />

        </Container>

      </Div>
    </header>

  );
}
