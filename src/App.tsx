import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContainer from "./containers/homeContainer";
import LinkContainer from "./containers/linkContainer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeContainer></HomeContainer>
        <article className="introduce">
          <h1>안녕하세요!</h1>
          <p>지금은 개발 중이라 더 좋은 기능으로 찾아뵐께요!</p>
        </article>
        <Routes>
          <Route path="/Link" element={<LinkContainer></LinkContainer>}></Route>
        </Routes>
        <Container></Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
