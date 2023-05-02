import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { lightTheme, darkTheme } from "../style/componets/theme";
import {
  List,
  Gear,
  Bell,
  FileEarmarkPlus,
  Sun,
  MoonStars,
} from "react-bootstrap-icons";

type HomeProps = {
  subject: string;
  show: boolean;
  active: string;
  theme: string;
  setTheme: () => void;
  onOffCanvas: () => void;
  onActiveNavLink: (e: string) => any;
};

function Home({
  subject,
  show,
  active,
  theme,
  setTheme,
  onOffCanvas,
  onActiveNavLink,
}: HomeProps) {
  let ObjectTheme;
  if (theme === "light") {
    ObjectTheme = lightTheme.style;
  } else {
    ObjectTheme = darkTheme.style;
  }

  return (
    <>
      <header>
        <Navbar id="NAV" bg="primary" variant="dark" expand={"sm"}>
          <Container fluid>
            <Navbar.Brand href="#">{subject}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item className="nav-link">
                <Link className="RouteLink me-auto" to="/">
                  홈
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-link">
                <Link className="RouteLink me-auto" to="/link">
                  책갈피
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-link">
                <Link className="RouteLink me-auto" to="/notice">
                  공지사항
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-link">
                <Link className="RouteLink me-auto" to="/task">
                  프로젝트
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Button variant="primary" onClick={setTheme}>
                  {theme === "light" ? (
                    <Sun size={21}></Sun>
                  ) : (
                    <MoonStars size={21}></MoonStars>
                  )}
                </Button>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Home;
