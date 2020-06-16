import React from "react";
import { Div } from "./../styles/Commits.styles";
import Table from "./../components/Table/index";
import api from "./../services/api.json"
export default function Commit() {
  return (
    <Div>
      <Table
        date={api[0].date}
        descripition={api[0].descripition}
        name={api[0].name}
        commit={api[0].commit} />
    </Div>
  )
}