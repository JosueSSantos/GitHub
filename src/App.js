import React from 'react';
import Header from "./pages/Header";
import Commits from "./pages/Commits";
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Commits />
    </BrowserRouter>


  );
}

export default App;