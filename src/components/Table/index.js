import React from "react";
import { Children, ContMaster, Container, Date, Description, Img, Name, Commit } from "./index.styles"
import perfil from "./../../assets/notifica.png";
export default function Title() {

  const infos = {
    date: ["Commits on Mar 30, 2020"],
    descripition: ["Alteração de estratégia para chave primária"],
    name: ["josue12322"],
    commit: ["committed on 30 Mar"]

  }

  return (
    <ContMaster>
      <Date>{infos.date}</Date>
      <Container>
        <Description><strong>{infos.descripition}</strong></Description>
        <Children>
          <Img ></Img>
          <Name><strong>{infos.name}</strong></Name>
          <Commit>{infos.commit}</Commit>
        </Children>
      </Container>
    </ContMaster>
  )
}