import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./modules";
/* 컨테이너 */
import HomeContainer from "./containers/homeContainer";
import LinkContainer from "./containers/linkContainer";
import IntroduceContainer from "./containers/introduceContainer";
import SignInContainer from "./containers/signinContainer";
import NoticeContainer from "./containers/noticeContainer";
import TaskContainer from "./containers/taskContainer";

/* Styled Components */
import StyledLayout from "./style/componets/toggle";

function App() {
  const theme = useSelector((state: RootState) => state.Home.theme);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    let nav = document.getElementById("NAV")?.clientHeight;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--nav", `${nav}px`);
  }

  window.addEventListener("resize", () => setScreenSize());

  useEffect(() => {
    setScreenSize();
  });

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
              <Route
                path="/Task"
                element={<TaskContainer></TaskContainer>}
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
