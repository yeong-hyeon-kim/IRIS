import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContainer from "./containers/homeContainer";
import LinkContainer from "./containers/linkContainer";
import IntroduceContainer from "./containers/introduceContainer";
function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div>
      <BrowserRouter>
        <HomeContainer></HomeContainer>
        <Routes>
          <Route
            path="/"
            element={<IntroduceContainer></IntroduceContainer>}
          ></Route>
          <Route path="/Link" element={<LinkContainer></LinkContainer>}></Route>
        </Routes>
        <Container></Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
