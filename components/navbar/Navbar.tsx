import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
function _Navbar(props: any) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={"/logo.png"}
            width={150}
            height={20}
            alt={""}
            style={{ marginBottom: "8px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="">
              <Link className="NavbarSet" href={props.Useref}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="NavbarSet" href={"/eventList"}>
                Event List
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="NavbarSet" href={"/contact"}>
                Contact Us
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="NavbarSet" href={"/about"}>
                About Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Form className="d-flex">
            <Button
              href="/signup"
              className="btnmargin"
              variant="outline-success"
            >
              {props.signup}
            </Button>
            <Button
              href="/login"
              className="btnmargin"
              variant="outline-success"
            >
              {props.login}
            </Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default dynamic(() => Promise.resolve(_Navbar), { ssr: false });
