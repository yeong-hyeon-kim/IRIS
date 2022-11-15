import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContainer from "./containers/homeContainer";
import LinkContainer from "./containers/linkContainer";
import IntroduceContainer from "./containers/introduceContainer";
import SignInContainer from "./containers/signinContainer";
import NoticeContainer from "./containers/noticeContainer";
import { ThemeProvider } from "styled-components";
import StyledLayout, { StyledButton } from "./style/componets/toggle";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./modules";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  useEffect(() => {
    setScreenSize();
  });

  const theme = useSelector((state: RootState) => state.Home.theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <BrowserRouter>
            <HomeContainer></HomeContainer>
            <Routes>
              <Route
                path="/"
                element={<IntroduceContainer></IntroduceContainer>}
              ></Route>
              <Route
                path="/Link"
                element={<LinkContainer></LinkContainer>}
              ></Route>
              <Route
                path="/SingIn"
                element={<SignInContainer></SignInContainer>}
              ></Route>
              <Route
                path="/Notice"
                element={<NoticeContainer></NoticeContainer>}
              ></Route>
            </Routes>
            <Container></Container>
          </BrowserRouter>
        </StyledLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
