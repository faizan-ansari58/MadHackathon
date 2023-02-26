import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import _Navbar from "@/components/navbar/Navbar";
import Introduction from "@/components/introduction/Introduction";
import Footer from "@/components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "@/components/card/Card";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#ced4da" }}>
        <_Navbar login="Log In" signup="Sign Up" Useref={"/"} />
        <Introduction />
        <Container className="ContainerSet Container">
          <br />
          <br />
          <Row className="cards">
            <Col md={6}>
              <Cards
                title="Create Events"
                src={"/createEvent.jpeg"}
                detail="Create Your Own Event in Our Website"
                buttoninfo="Create Event"
                Useref={"/login"}
              />
            </Col>
            <Col md={6}>
              <Cards
                title="manageEvent"
                src={"/createEvent.jpeg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                Useref={"/login"}
              />
            </Col>
            <Col md={6}>
              <Cards
                title="invitationEvent"
                src={"/invitationEvent.jpeg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                Useref={"/login"}
              />
            </Col>
            <Col md={6}>
              <Cards
                title="rsvpEvent"
                src={"/rsvpEvent.jpeg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                Useref={"/login"}
              />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}
