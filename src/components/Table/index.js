import React from "react";
import { Children, ContMaster, Container, Date, Description, Img, Name, Commit } from "./index.styles"

export default function Title({
  date,
  descripition,
  imagem,
  name,
  commit }) {
  return (
    <ContMaster>
      <Date>{date}</Date>
      <Container>
        <Description><strong>{descripition}</strong></Description>
        <Children>
          <Img >{imagem}</Img>
          <Name><strong>{name}</strong></Name>
          <Commit>{commit}</Commit>
        </Children>
      </Container>
    </ContMaster>
  )
}