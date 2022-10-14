import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { FileEarmark, List, Gear, Bell } from "react-bootstrap-icons";

type HomeProps = {
  subject: string;
  show: boolean;
  active: string;
  onOffCanvas: () => void;
  onActiveNavLink: (e: string) => any;
};

function Home({
  subject,
  onOffCanvas,
  show,
  onActiveNavLink,
  active,
}: HomeProps) {
  return (
    <>
      <Button variant="primary" onClick={onOffCanvas}>
        <List size={21}></List>
      </Button>

      <Offcanvas show={show} onHide={onOffCanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>이나님의 페이지</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav variant="pills" activeKey={active} className="flex-column">
            <Nav.Item onMouseEnter={() => onActiveNavLink("1")}>
              <Nav.Link className="nav-links" eventKey="1">
                <FileEarmark size={21}></FileEarmark> 문서
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onMouseEnter={() => onActiveNavLink("2")}>
              <Nav.Link className="nav-links" eventKey="2">
                <Bell size={21}></Bell> 알림
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onMouseEnter={() => onActiveNavLink("3")}>
              <Nav.Link className="nav-links" eventKey="3">
                <Gear size={21}></Gear> 설정
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Home;
