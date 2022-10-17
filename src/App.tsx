import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContainer from "./containers/homeContainer";
import LinkContainer from "./containers/linkContainer";
import IntroduceContainer from "./containers/introduceContainer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeContainer></HomeContainer>
        <Routes>
          <Route path="/" element={<IntroduceContainer></IntroduceContainer>}></Route>
          <Route path="/Link" element={<LinkContainer></LinkContainer>}></Route>
        </Routes>
        <Container></Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
