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

function App() {
  const lightTheme = {
    value: "light",
    style: {
      backgroundColor: "#ffffff",
      color: "#343a40",
    },
  };

  const darkTheme = {
    value: "dark",
    style: {
      backgroundColor: "#343a40",
      color: "#ffffff",
    },
  };

  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme.value === "light" ? darkTheme : lightTheme);
  };

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
          <StyledButton onClick={toggleTheme} variant={"primary"}>
            SetTheme!
          </StyledButton>
        </StyledLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
